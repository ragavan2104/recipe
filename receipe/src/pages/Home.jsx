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
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Perfect Recipe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore thousands of delicious recipes from around the world. Save your favorites and create your own culinary journey.
            </p>
            
            {/* Search Bar in Hero */}
            <div className="max-w-3xl mx-auto mb-12">
              <Searchbar query={query} setQuery={setQuery} onSearch={searchRecipes} />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
                <div className="text-blue-100">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-100">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100K+</div>
                <div className="text-blue-100">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {isSearching ? (
              <>
                Search Results for{" "}
                <span className="text-blue-600">"{query}"</span>
              </>
            ) : (
              "Featured Recipes"
            )}
          </h2>
          {!loading && recipes.length > 0 && (
            <p className="text-gray-600 text-lg">
              {isSearching ? `Found ${recipes.length} delicious recipes` : `${recipes.length} carefully curated recipes for you`}
            </p>
          )}
        </div>

        {loading ? (
          <RecipeLoading 
            text={isSearching ? "Searching for amazing recipes..." : "Loading featured recipes..."} 
          />
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-5xl text-white">🔍</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No recipes found</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              We couldn't find any recipes matching your search. Try different keywords or explore our featured recipes.
            </p>
            <button
              onClick={() => {
                setQuery("");
                fetchRandomRecipes();
                setIsSearching(false);
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
            >
              Explore Featured Recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
