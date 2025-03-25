// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId, onCancel }) => {
  const recipes = useRecipeStore(state => state.recipes);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipeId, recipes]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this critical line
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;