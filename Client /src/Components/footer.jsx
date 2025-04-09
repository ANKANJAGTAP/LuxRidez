import React from 'react';
const Footer = () => {
    return (
      <footer className="py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} LuxRidez. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  export default Footer;