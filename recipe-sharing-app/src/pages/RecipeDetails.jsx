import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore';
import EditRecipeForm from '../components/EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found.</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
