// App.jsx
import React from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">CarZone</h1>
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/cars" className="text-gray-700 hover:text-blue-600">
            Cars
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-96"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1500x600?text=Find+Your+Dream+Car')"
      }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Car
        </h2>
        <p className="text-gray-300 text-lg mb-6 text-center max-w-xl px-4">
          Explore our extensive range of cars and filter by your favorite brand,
          price range, fuel type, and seating capacity.
        </p>
        <a
          href="/cars"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          View Cars
        </a>
      </div>
    </section>
  );
};
const FeaturedCars = () => {
  const featured = [
    {
      id: 1,
      brand: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 40000,
      imageUrl: "https://via.placeholder.com/300?text=Tesla+Model+3"
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      imageUrl: "https://via.placeholder.com/300?text=Honda+Civic"
    },
    {
      id: 3,
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      price: 21000,
      imageUrl: "https://via.placeholder.com/300?text=Toyota+Corolla"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Cars
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={car.imageUrl}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  {car.brand} {car.model}
                </h4>
                <p className="text-gray-600">{car.year}</p>
                <p className="text-gray-800 font-bold mt-2">${car.price}</p>
                <a
                  href={`/cars/${car.id}`}
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About CarZone
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          CarZone is your one-stop destination for finding the perfect car.
          Whether you are searching for a family sedan, an eco-friendly electric
          vehicle, or a sporty convertible, CarZone's extensive listing and
          powerful filter options make car buying effortless and enjoyable.
        </p>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} CarZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Home Page Component
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
