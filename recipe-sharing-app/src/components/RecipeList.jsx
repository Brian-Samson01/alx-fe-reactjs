import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import { useMemo } from 'react';

const RecipeList = () => {
  const getFilteredRecipes = useRecipeStore(state => state.getFilteredRecipes);
  const filteredRecipes = useMemo(() => getFilteredRecipes(), [getFilteredRecipes]);

  return (
    <div className="recipe-list">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipes/${recipe.id}`} className="recipe-link">
            <h3>{recipe.title}</h3>
            <p className="recipe-excerpt">
              {recipe.description.substring(0, 100)}...
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;