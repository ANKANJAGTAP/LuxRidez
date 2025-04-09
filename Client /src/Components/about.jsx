import React from "react";
import { FaCarSide, FaUser } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 mt-10 text-white">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600 text-white p-4 rounded-full shadow-lg animate-bounce">
              <FaCarSide size={32} />
            </div>
          </div>
          <h3 className="text-4xl font-extrabold tracking-tight">
            About <span className="text-indigo-500">LuxRidez</span>
          </h3>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your one-stop destination for discovering the perfect car tailored to your lifestyle.
          </p>
        </div>

    
        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] mb-12">
          <p className="text-lg leading-relaxed text-center">
            Whether you're eyeing a family sedan, a high-efficiency electric vehicle, or a sleek convertible, 
            <span className="text-indigo-600 font-semibold"> LuxRidez</span> offers a curated experience to match your needs. 
            With smart filters, modern design, and a growing vehicle directory, 
            we make your car-buying journey smooth, exciting, and stress-free.
          </p>
        </div>

    
        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-4 hover:shadow-indigo-600/20 transition-all duration-300">
          <div className="flex justify-center mb-3">
            <div className="bg-indigo-600 p-3 rounded-full">
              <FaUser size={28} />
            </div>
          </div>
          <h4 className="text-2xl font-bold text-indigo-400">Ankan Jagtap</h4>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            I'm a passionate Computer Science student and developer behind LuxRidez. I love crafting stunning web apps and simplifying the way people experience tech — especially in automotive and smart solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
