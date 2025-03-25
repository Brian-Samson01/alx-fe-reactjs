import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const [favorites, recipes] = useRecipeStore(state => [
    state.favorites,
    state.recipes
  ]);

  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean);

  return (
    <div className="favorites-list">
      <h2>Your Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No favorites yet! Start adding some recipes to your favorites.</p>
      )}
    </div>
  );
};

export default FavoritesList;