import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaClock, FaUsers, FaStar } from "react-icons/fa";

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
    <div className="group relative">
      {/* Glowing effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
      
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Favorite button */}
          <button
            onClick={toggleFavorite}
            className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm ${
              isFavorite 
                ? 'bg-red-500 text-white hover:bg-red-600 hover:scale-110' 
                : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500 hover:scale-110'
            }`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? (
              <FaHeart size={16} />
            ) : (
              <FaRegHeart size={16} />
            )}
          </button>

          {/* Health score badge */}
          {recipe.healthScore && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              <FaStar className="inline mr-1" size={12} />
              {recipe.healthScore}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
            {recipe.title}
          </h3>
          
          {/* Recipe info */}
          <div className="flex items-center justify-between mb-4">
            {recipe.readyInMinutes && (
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                <FaClock className="text-blue-500" size={12} />
                <span className="font-medium">{recipe.readyInMinutes} min</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-full">
                <FaUsers className="text-purple-500" size={12} />
                <span className="font-medium">{recipe.servings} servings</span>
              </div>
            )}
          </div>
          
          <Link
            to={`/recipe/${recipe.id}`}
            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group-hover:scale-105 transform"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};



export default RecipeCard;
