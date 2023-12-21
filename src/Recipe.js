export default function RecipeItem({
  recipe,
  onDeleteRecipe,
  onToggleFavorite,
}) {
  return (
    <div className="recipe-item">
      <h4>{recipe.title}</h4>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <button onClick={() => onToggleFavorite(recipe.id)}>
        {recipe.favorite ? "★ Unfavorite" : "☆ Favorite"}
      </button>
      <button onClick={() => onDeleteRecipe(recipe.id)}>Delete</button>
    </div>
  );
}
