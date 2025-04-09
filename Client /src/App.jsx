import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Cars from "./Components/Cars.jsx";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/Hero.jsx";
import FeaturedCars from "./Components/featured.jsx";
import About from "./Components/about.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/footer.jsx";
import Conatact from "./Components/contact.jsx";


function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturedCars />
                <About />
              </>
            }
          />
          <Route
            path="/cars"
            element={
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Cars />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Conatact />
              </motion.div>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Conatact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
