import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const [recommendations, generateRecommendations] = useRecipeStore(state => [
    state.recommendations,
    state.generateRecommendations
  ]);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations">
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add some favorites first!</p>
      )}
    </div>
  );
};

export default RecommendationsList;