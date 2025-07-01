import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaClock, FaUsers } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if recipe is already in favorites
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      setIsFavorite(favorites.some(fav => fav.id === recipe.id));
    }
  }, [recipe.id]);

  // Toggle favorite status
  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter(fav => fav.id !== recipe.id);
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(recipe);
      setIsFavorite(true);
    }
    
    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm ${
            isFavorite 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <FaHeart size={16} />
          ) : (
            <FaRegHeart size={16} />
          )}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        
        {/* Recipe info */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
          {recipe.readyInMinutes && (
            <div className="flex items-center gap-1">
              <FaClock className="text-orange-500" />
              <span>{recipe.readyInMinutes} min</span>
            </div>
          )}
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <FaUsers className="text-blue-500" />
              <span>{recipe.servings} servings</span>
            </div>
          )}
        </div>
        
        <Link
          to={`/recipe/${recipe.id}`}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
        >
          View Recipe
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};


export default RecipeCard;
