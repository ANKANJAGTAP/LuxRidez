import React, { useState } from "react";

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const featured = [
    {
      id: 1,
      brand: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 40000,
      imageUrl:
        "https://images.unsplash.com/photo-1651439936711-ca2bfa49ed56?w=500&auto=format&fit=crop&q=60",
      fuelType: "Electric",
      seatingCapacity: 5,
      description: "An all-electric sedan with advanced autopilot features.",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      imageUrl:
        "https://images.unsplash.com/photo-1709441374848-cf52205e9f34?w=500&auto=format&fit=crop&q=60",
      fuelType: "Petrol",
      seatingCapacity: 5,
      description: "Reliable compact car known for its fuel efficiency.",
    },
    {
      id: 3,
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      price: 21000,
      imageUrl:
        "https://images.unsplash.com/photo-1657229355331-98381386908e?w=500&auto=format&fit=crop&q=60",
      fuelType: "Hybrid",
      seatingCapacity: 5,
      description: "A blend of performance and economy with hybrid power.",
    },
  ];

  const addToWishlist = (car) => {
    alert(`${car.brand} ${car.model} added to wishlist!`);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-10 py-12 ">
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-white">Featured Cars</h3>
      </div>
  
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((car) => (
          <div
            key={car.id}
            className="bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-500"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={car.imageUrl}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold text-white">
              {car.brand} {car.model} ({car.year})
            </h3>
            <p className="text-gray-300 mt-1">Price: ${car.price}</p>
            <p className="text-gray-300">Fuel: {car.fuelType}</p>
            <p className="text-gray-300">Seating: {car.seatingCapacity}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setSelectedCar(car)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Details
              </button>
              <button
                onClick={() => addToWishlist(car)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {selectedCar && (
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-start z-50 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 max-w-lg w-full relative animate-fade-in-up border border-white/30 mt-24">
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
            <p>
              <strong>💸 Price:</strong> ${selectedCar.price}
            </p>
            <p>
              <strong>⛽ Fuel Type:</strong> {selectedCar.fuelType}
            </p>
            <p>
              <strong>🧍 Seating Capacity:</strong> {selectedCar.seatingCapacity}
            </p>
            <p>
              <strong>📝 Description:</strong> {selectedCar.description}
            </p>
          </div>
        </div>
      </div>
    )}
  </section>  
  );
};

export default FeaturedCars;
