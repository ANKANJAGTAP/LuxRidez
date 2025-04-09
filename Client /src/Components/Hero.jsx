import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&auto=format&fit=crop&q=80",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-screen transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <div className="p-6 md:p-10">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Find Your Dream Car
          </h2>
          <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl">
            Explore our extensive range of cars and filter by your favorite brand,
            price range, fuel type, and seating capacity.
          </p>
          <a
            href="/cars"
            className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View Cars
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
