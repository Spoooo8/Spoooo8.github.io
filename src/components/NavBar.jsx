import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Branding */}
        <h1 className="text-2xl font-semibold tracking-widest text-gray-900 uppercase">
          <span className="font-extrabold">S</span>poorthi S
        </h1>

        {/* Navigation */}
        <div className="space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black transition-colors duration-150">Home</Link>
          <Link to="/about" className="hover:text-black transition-colors duration-150">About</Link>
          <Link to="/projects" className="hover:text-black transition-colors duration-150">Projects</Link>
          <Link to="/contact" className="hover:text-black transition-colors duration-150">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
