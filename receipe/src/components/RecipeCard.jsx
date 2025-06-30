import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-blue-500 text-sm mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default RecipeCard;
