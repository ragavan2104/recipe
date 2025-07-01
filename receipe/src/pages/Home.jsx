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
    <div className="max-w-7xl mx-auto px-4">
      <Searchbar query={query} setQuery={setQuery} onSearch={searchRecipes} />
      <h1 className="text-2xl text-center mt-10 font-bold">
        {isSearching ? `Search Results for "${query}"` : "Featured Recipes"}
      </h1>

      {loading ? (
        <RecipeLoading 
          text={isSearching ? "Searching for delicious recipes..." : "Loading featured recipes..."} 
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
