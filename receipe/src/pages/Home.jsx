import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import RecipeCard from "../components/RecipeCard";
import Loading, { RecipeLoading } from "../components/Loading";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchRandomRecipes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=12&apiKey=82e77c44fb9340e282e8b492b5956b87`
      );
      setRecipes(res.data.recipes);
    } catch (error) {
      console.error("Error fetching random recipes", error);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async () => {
    if (!query.trim()) {
      fetchRandomRecipes();
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&apiKey=82e77c44fb9340e282e8b492b5956b87&addRecipeInformation=true`
      );
      setRecipes(res.data.results);
    } catch (error) {
      console.error("Error searching recipes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover Amazing{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Recipes
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Find and save your favorite recipes from around the world. From quick meals to gourmet dishes.
        </p>
      </div>

      <Searchbar query={query} setQuery={setQuery} onSearch={searchRecipes} />
      
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {isSearching ? (
            <>
              Search Results for{" "}
              <span className="text-orange-600">"{query}"</span>
            </>
          ) : (
            "Featured Recipes"
          )}
        </h2>
        {!loading && recipes.length > 0 && (
          <p className="text-gray-600 mt-2">
            {isSearching ? `Found ${recipes.length} recipes` : `${recipes.length} delicious recipes to try`}
          </p>
        )}
      </div>

      {loading ? (
        <RecipeLoading 
          text={isSearching ? "Searching for delicious recipes..." : "Loading featured recipes..."} 
        />
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍳</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No recipes found</h3>
          <p className="text-gray-600 mb-6">Try searching with different keywords</p>
          <button
            onClick={() => {
              setQuery("");
              fetchRandomRecipes();
              setIsSearching(false);
            }}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg"
          >
            Show Featured Recipes
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
