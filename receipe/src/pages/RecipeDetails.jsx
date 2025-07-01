import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Loading from "../components/Loading";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchRecipeDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=82e77c44fb9340e282e8b492b5956b87`
      );
      setRecipe(res.data);
      setLoading(false);
      
      // Check if recipe is in favorites
      const savedFavorites = localStorage.getItem("favoriteRecipes");
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        setIsFavorite(favorites.some(fav => fav.id === res.data.id));
      }
    } catch (error) {
      console.error("Error fetching recipe details", error);
      setLoading(false);
    }
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    if (!recipe) return;
    
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

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Loading 
          size="large" 
          text="Loading recipe details..." 
        />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">Recipe not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-4 transition-colors"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold flex-1">{recipe.title}</h1>
            <button
              onClick={toggleFavorite}
              className="ml-4 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? (
                <FaHeart className="text-red-500" size={20} />
              ) : (
                <FaRegHeart className="text-gray-400 hover:text-red-500" size={20} />
              )}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <span className="block text-2xl font-bold text-green-600">
                {recipe.readyInMinutes}
              </span>
              <span className="text-sm text-gray-600">Minutes</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-blue-600">
                {recipe.servings}
              </span>
              <span className="text-sm text-gray-600">Servings</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-purple-600">
                {recipe.healthScore}
              </span>
              <span className="text-sm text-gray-600">Health Score</span>
            </div>
          </div>

          {recipe.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </div>
          )}

          {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>{ingredient.original}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe.instructions && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              />
            </div>
          )}

          {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Step by Step Instructions</h2>
              <ol className="space-y-4">
                {recipe.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {step.number}
                    </span>
                    <span className="text-gray-700">{step.step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {recipe.dishTypes && recipe.dishTypes.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Dish Types</h2>
              <div className="flex flex-wrap gap-2">
                {recipe.dishTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {recipe.diets && recipe.diets.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Diet Types</h2>
              <div className="flex flex-wrap gap-2">
                {recipe.diets.map((diet, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm"
                  >
                    {diet}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
