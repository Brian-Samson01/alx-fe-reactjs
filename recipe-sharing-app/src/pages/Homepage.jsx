import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';
import AddRecipeForm from '../components/AddRecipeForm';

const HomePage = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm />
      <div>
        {recipes.length === 0 ? (
          <p>No recipes yet. Add one!</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="border p-4 rounded mb-2">
              <h3 className="text-lg font-bold">{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
