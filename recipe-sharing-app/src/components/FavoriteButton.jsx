import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const [addFavorite, removeFavorite, isFavorite] = useRecipeStore(state => [
    state.addFavorite,
    state.removeFavorite,
    state.isFavorite
  ]);

  const handleClick = () => {
    isFavorite(recipeId) ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button 
      onClick={handleClick}
      className={`favorite-btn ${isFavorite(recipeId) ? 'active' : ''}`}
    >
      {isFavorite(recipeId) ? '❤️ Remove Favorite' : '🤍 Add Favorite'}
    </button>
  );
};

export default FavoriteButton;