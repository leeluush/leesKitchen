export default function Stats({ recipes }) {
  if (!recipes.length)
    return (
      <p className="stats">
        <em>Start adding some recipes to your collection! 🍲</em>
      </p>
    );

  const numRecipes = recipes.length;
  const numFavorites = recipes.filter((recipe) => recipe.favorite).length;
  const favoritePercentage =
    numRecipes > 0 ? Math.round((numFavorites / numRecipes) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {numRecipes} {numRecipes === 1 ? "recipe" : "recipes"} in your
        collection, with {numFavorites} marked as favorite ({favoritePercentage}
        %).
      </em>
    </footer>
  );
}
