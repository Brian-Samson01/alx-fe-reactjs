import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{
        backgroundColor: '#ff4444',
        color: 'white',
        padding: '8px 16px'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;