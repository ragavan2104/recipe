import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaEnvelope, FaBars, FaTimes, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform group">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <FaUtensils className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CookBook
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Recipe Discovery</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/favorites" 
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                isActive('/favorites') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaHeart className="text-lg" />
              <span>Favorites</span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaHome className="text-lg" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link 
              to="/favorites" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive('/favorites') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaHeart className="text-lg" />
              <span className="font-medium">Favorites</span>
            </Link>
            
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
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
