import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === Number(id))
  );
  const navigate = useNavigate();

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate(`/recipes/${id}/edit`)}>
          Edit Recipe
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
        <button onClick={() => navigate('/')}>
          Back to List
        </button>
      </div>
      <div className="action-buttons">
        <FavoriteButton recipeId={recipe.id} />
        <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;