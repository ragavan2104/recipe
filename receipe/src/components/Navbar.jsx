import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaEnvelope, FaBars, FaTimes, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <FaUtensils className="text-2xl" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Recipe Finder
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-105 ${
                isActive('/') ? 'bg-white bg-opacity-20 shadow-lg' : ''
              }`}
            >
              <FaHome className="text-lg" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link 
              to="/favorites" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-105 ${
                isActive('/favorites') ? 'bg-white bg-opacity-20 shadow-lg' : ''
              }`}
            >
              <FaHeart className="text-lg" />
              <span className="font-medium">Favorites</span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:scale-105 ${
                isActive('/contact') ? 'bg-white bg-opacity-20 shadow-lg' : ''
              }`}
            >
              <FaEnvelope className="text-lg" />
              <span className="font-medium">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 ${
                isActive('/') ? 'bg-white bg-opacity-20' : ''
              }`}
            >
              <FaHome className="text-lg" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link 
              to="/favorites" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 ${
                isActive('/favorites') ? 'bg-white bg-opacity-20' : ''
              }`}
            >
              <FaHeart className="text-lg" />
              <span className="font-medium">Favorites</span>
            </Link>
            
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20 ${
                isActive('/contact') ? 'bg-white bg-opacity-20' : ''
              }`}
            >
              <FaEnvelope className="text-lg" />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
