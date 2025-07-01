import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 relative">
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" size={16} />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-500" size={16} />
        )}
      </button>
      
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-blue-500 text-sm mt-2 inline-block hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default RecipeCard;
