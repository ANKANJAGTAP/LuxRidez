import React, { useState, useEffect } from "react";

const CarFinderApp = () => {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
    seatingCapacity: "",
  });
  const [page, setPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchCars = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${backendUrl}/cardetails`);
      const data = await response.json();

      let filtered = data;
      const { brand, minPrice, maxPrice, fuelType, seatingCapacity } = filters;

      if (brand) {
        filtered = filtered.filter((car) =>
          car.brand.toLowerCase().includes(brand.toLowerCase())
        );
      }
      if (fuelType) {
        filtered = filtered.filter(
          (car) => car.fuelType.toLowerCase() === fuelType.toLowerCase()
        );
      }
      if (seatingCapacity) {
        filtered = filtered.filter(
          (car) => car.seatingCapacity === parseInt(seatingCapacity)
        );
      }
      if (minPrice) {
        filtered = filtered.filter((car) => car.price >= parseInt(minPrice));
      }
      if (maxPrice) {
        filtered = filtered.filter((car) => car.price <= parseInt(maxPrice));
      }
      if (search) {
        filtered = filtered.filter((car) =>
          `${car.brand} ${car.model}`.toLowerCase().includes(search.toLowerCase())
        );
      }

      const limit = 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginated = filtered.slice(startIndex, endIndex);

      setCars(paginated);
      setTotalCars(filtered.length);
    } catch (err) {
      setError("Failed to fetch cars.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, [filters, page, search]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  const addToWishlist = (car) => {
    if (!wishlist.find((item) => item._id === car._id)) {
      setWishlist((prev) => [...prev, car]);
    }
  };

  const removeFromWishlist = (carId) => {
    setWishlist((prev) => prev.filter((car) => car._id !== carId));
  };

  const totalPages = Math.ceil(totalCars / 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10 drop-shadow-lg">Car Finder App</h1>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full md:w-1/2 mb-3 md:mb-0 rounded-xl bg-gray-800 border border-gray-600 placeholder-gray-400"
        />
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="ml-0 md:ml-4 px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-5xl mx-auto mb-10 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" name="brand" value={filters.brand} onChange={handleFilterChange} placeholder="Brand" className="p-3 border rounded-xl shadow-sm bg-gray-800 text-white border-gray-600" />
            <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price" className="p-3 border rounded-xl shadow-sm bg-gray-800 text-white border-gray-600" />
            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price" className="p-3 border rounded-xl shadow-sm bg-gray-800 text-white border-gray-600" />
            <input type="text" name="fuelType" value={filters.fuelType} onChange={handleFilterChange} placeholder="Fuel Type" className="p-3 border rounded-xl shadow-sm bg-gray-800 text-white border-gray-600" />
            <input type="number" name="seatingCapacity" value={filters.seatingCapacity} onChange={handleFilterChange} placeholder="Seating Capacity" className="p-3 border rounded-xl shadow-sm bg-gray-800 text-white border-gray-600" />
          </div>
        </div>
      )}

      {loading && <p className="text-center text-lg font-semibold">Loading cars...</p>}
      {error && <p className="text-center text-red-500 font-semibold">Error: {error}</p>}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length ? (
          cars.map((car) => (
            <div
              key={car._id}
              className="bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-500"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={car.imageUrl}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{car.brand} {car.model} ({car.year})</h3>
              <p className="text-gray-300 mt-1">Price: ${car.price}</p>
              <p className="text-gray-300">Fuel: {car.fuelType}</p>
              <p className="text-gray-300">Seating: {car.seatingCapacity}</p>
              <div className="mt-4 flex justify-between">
                <button onClick={() => setSelectedCar(car)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Details</button>
                <button onClick={() => addToWishlist(car)} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Wishlist</button>
              </div>
            </div>
          ))
        ) : (!loading && <p className="text-center text-gray-500 col-span-full">No cars found with current filters.</p>)}
      </div>

      {totalPages > 1 && (
        <div className="max-w-5xl mx-auto flex justify-center mt-8 space-x-4">
          <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)} className="px-5 py-2 bg-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-700">Previous</button>
          <span className="px-4 py-2 font-semibold">Page {page} of {totalPages}</span>
          <button disabled={page >= totalPages} onClick={() => setPage((prev) => prev + 1)} className="px-5 py-2 bg-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-700">Next</button>
        </div>
      )}

      {selectedCar && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 max-w-lg w-full relative animate-fade-in-up border border-white/30">
          <button
            className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-gray-800 transition duration-300"
            onClick={() => setSelectedCar(null)}
          >
            &times;
          </button>
          <img
            src={selectedCar.imageUrl}
            alt={`${selectedCar.brand} ${selectedCar.model}`}
            className="w-full h-56 object-cover rounded-2xl shadow-md mb-5 transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            {selectedCar.brand} {selectedCar.model} ({selectedCar.year})
          </h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>💸 Price:</strong> ${selectedCar.price}</p>
            <p><strong>⛽ Fuel Type:</strong> {selectedCar.fuelType}</p>
            <p><strong>🧍 Seating Capacity:</strong> {selectedCar.seatingCapacity}</p>
            <p><strong>📝 Description:</strong> {selectedCar.description}</p>
          </div>
          <button
            onClick={() => addToWishlist(selectedCar)}
            className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 rounded-xl shadow-md hover:from-green-600 hover:to-emerald-700 transition duration-300"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      )}

      <div className="max-w-5xl mx-auto mt-12 bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl font-semibold mb-6 text-gray-100">My Wishlist</h2>
        {wishlist.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishlist.map((item) => (
              <div key={item._id} className="bg-gray-800 p-4 rounded-xl flex justify-between items-center shadow-sm">
                <div className="flex items-center space-x-3">
                  <img src={item.imageUrl} alt={`${item.brand} ${item.model}`} className="w-14 h-14 object-cover rounded-xl" />
                  <div>
                    <p className="font-medium text-white">{item.brand} {item.model}</p>
                    <p className="text-gray-400 text-sm">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => removeFromWishlist(item._id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">Remove</button>
              </div>
            ))}
          </div>
        ) : (<p className="text-gray-400">Your wishlist is empty.</p>)}
      </div>
    </div>
  );
};

export default CarFinderApp;