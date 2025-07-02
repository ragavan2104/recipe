import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";

const Searchbar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                placeholder="Search for amazing recipes..."
                className="w-full pl-8 pr-4 py-4 bg-transparent text-gray-800 placeholder-gray-500 text-lg font-medium focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={onSearch}
              className="ml-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center space-x-2"
            >
              <span>Search</span>
              <FaSearch size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Popular searches */}
      <div className="mt-6 text-center">
        <p className="text-white/80 mb-4 font-medium">✨ Popular Searches</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { term: 'Italian Pasta', icon: '🍝' },
            { term: 'Healthy Salads', icon: '🥗' },
            { term: 'Desserts', icon: '🍰' },
            { term: 'Quick Meals', icon: '⚡' },
            { term: 'Vegetarian', icon: '🌱' }
          ].map((item) => (
            <button
              key={item.term}
              onClick={() => {
                setQuery(item.term);
                setTimeout(onSearch, 100);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium">{item.term}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Searchbar;
