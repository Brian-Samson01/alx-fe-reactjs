import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ display: 'grid', gap: '20px' }}>
      {recipes.map(recipe => (
        <div 
          key={recipe.id}
          style={{
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}
        >
          <Link 
            to={`/recipes/${recipe.id}`}
            style={{ textDecoration: 'none', color: '#333' }}
          >
            <h3 style={{ margin: '0 0 10px 0' }}>{recipe.title}</h3>
          </Link>
          <p style={{ margin: '0' }}>
            {recipe.description.substring(0, 100)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;