import { useState } from "react";

import RecipeForm from "./RecipeForm";
import Logo from "./Logo";
import RecipeList from "./RecipeList";
import Stats from "./Stats";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all recipes?"
    );
    if (confirmed) setRecipes([]);
  }

  function handleAddRecipe(recipe) {
    setRecipes((recipes) => [...recipes, recipe]);
  }

  function handleDeleteRecipe(id) {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  }

  function handleToggleFavorite(id) {
    setRecipes((recipes) =>
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList
        recipes={recipes}
        onDeleteRecipe={handleDeleteRecipe}
        onToggleFavorite={handleToggleFavorite}
        onClearList={handleClearList}
      />
      <Stats recipes={recipes} />
    </div>
  );
}
