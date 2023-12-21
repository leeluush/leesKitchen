import { useState } from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  recipes,
  onDeleteRecipe,
  onToggleFavorite,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedRecipes;

  if (sortBy === "input") sortedRecipes = recipes;

  if (sortBy === "title")
    sortedRecipes = recipes
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === "favorite")
    sortedRecipes = recipes
      .slice()
      .sort((a, b) => Number(b.favorite) - Number(a.favorite));

  return (
    <div className="recipe-list">
      <ul>
        {sortedRecipes.map((recipe) => (
          <Recipe
            recipe={recipe}
            onDeleteRecipe={onDeleteRecipe}
            onToggleFavorite={onToggleFavorite}
            key={recipe.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="title">Sort by title</option>
          <option value="favorite">Sort by favorite</option>
        </select>
        <button onClick={onClearList}>Clear All Recipes</button>
      </div>
    </div>
  );
}
