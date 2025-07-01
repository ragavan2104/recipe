import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="flex items-center justify-center mt-8 px-4">
      <div className="relative w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Search for delicious recipes..."
            className="w-full pl-6 pr-14 py-4 bg-white rounded-2xl shadow-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 text-lg"
          />
          <button
            onClick={onSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaSearch size={18} />
          </button>
        </div>
        
        {/* Search suggestions or popular searches */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Pasta', 'Chicken', 'Vegetarian', 'Dessert', 'Quick meals'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  setTimeout(onSearch, 100);
                }}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors duration-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Searchbar;
