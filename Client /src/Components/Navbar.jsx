import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-blue-600 tracking-tight"
        >
          LuxRidez
        </NavLink>
        <div className="hidden md:flex space-x-8 text-lg absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/signup"
          className="hidden md:inline-block ml-4 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </NavLink>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pt-2 pb-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition-colors duration-200 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
