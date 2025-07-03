import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { FaHeart, FaTrash } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Remove a recipe from favorites
  const removeFromFavorites = (recipeId) => {
    const updatedFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
  };

  // Clear all favorites
  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favoriteRecipes");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <FaHeart className="text-red-500" />
          My Favorite Recipes
        </h1>
        <p className="text-gray-600">
          {favorites.length > 0 
            ? `You have ${favorites.length} favorite recipe${favorites.length > 1 ? 's' : ''}`
            : "No favorite recipes yet. Start exploring and add some recipes to your favorites!"
          }
        </p>
      </div>

      {favorites.length > 0 && (
        <div className="text-center mb-6 relative">
          <button
            onClick={clearAllFavorites}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2  transition-colors absolute right-0 top-0 transform -translate-y-1/2 translate-x-1/2 shadow-lg"
          >
            <FaTrash />
            Clear All Favorites
          </button>
        </div>
      )}

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="relative">
              <RecipeCard recipe={recipe} />
              <button
                onClick={() => removeFromFavorites(recipe.id)}
                className="absolute top-48 right-5 bg-red-500 hover:bg-red-600 text-white px-4 p-2 rounded-full shadow-lg transition-colors z-10 "
                title="Remove from favorites"
              >
                <FaTrash size={12} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <FaHeart className="text-gray-300 text-6xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-6">
            Discover amazing recipes and save your favorites here!
          </p>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg inline-block transition-colors"
          >
            Explore Recipes
          </a>
        </div>
      )}
    </div>
  );
};

export default Favorites;
