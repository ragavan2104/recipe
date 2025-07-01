import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white sticky top-0 z-50 shadow-xl">
      <div className="flex  items-center p-4  mx-auto">
        <h1 className="text-2xl font-bold">Recipe Finder</h1>

<div className="flex-grow  items-center hidden md:flex justify-end ">
            {/* Desktop Menu */}
        <ul >
          <li className="hover:underline inline-block mr-4">
            <Link to="/"><FaHome className="inline-block mr-1" /> Home</Link>
          </li>
          <li className="hover:underline inline-block mr-4">
            <Link to="/favorites"><FaHeart className="inline-block mr-1" /> Favorites</Link>
          </li>
          <li className="hover:underline inline-block">
            <Link to="/contact"><FaEnvelope className="inline-block mr-1" /> Contact Us</Link>
          </li>
        </ul>

</div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} className="" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaHome className="inline-block mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" onClick={() => setIsOpen(false)}>
              <FaHeart className="inline-block mr-1" /> Favorites
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <FaEnvelope className="inline-block mr-1" /> Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
