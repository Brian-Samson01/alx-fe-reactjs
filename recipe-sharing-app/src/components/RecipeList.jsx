// src/components/RecipeList.jsx
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';

const RecipeList = () => {
  const getFilteredRecipes = useRecipeStore(state => state.getFilteredRecipes);
  const filteredRecipes = useMemo(() => getFilteredRecipes(), [getFilteredRecipes]);

  return (
    <div className="recipe-list">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 100)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;