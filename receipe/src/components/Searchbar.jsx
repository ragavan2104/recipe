import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="flex items-center justify-center mt-6 px-4">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          placeholder="Search recipes..."
          className="w-full pl-4 pr-10 py-2 bg-gray-200 rounded-lg focus:outline-none "
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
