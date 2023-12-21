import { useState } from "react";

export default function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !ingredients || !instructions) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      favorite: false,
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
  }
  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h3>Add a New Recipe</h3>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        rows="5"
      ></textarea>
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        rows="5"
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
