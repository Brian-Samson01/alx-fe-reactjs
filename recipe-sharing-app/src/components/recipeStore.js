// src/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // State
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  // Recipe Actions
  addRecipe: (newRecipe) => 
    set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  deleteRecipe: (recipeId) => 
    set(state => ({ 
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId) 
    })),
  
  updateRecipe: (updatedRecipe) => 
    set(state => ({
      recipes: state.recipes.map(recipe => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),

  // Search Functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Favorites System
  addFavorite: (recipeId) => 
    set(state => ({ 
      favorites: [...new Set([...state.favorites, recipeId])] 
    })),
  
  removeFavorite: (recipeId) => 
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),
  
  isFavorite: (recipeId) => get().favorites.includes(recipeId),

  // Recommendations System
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favoriteCategories = recipes
      .filter(recipe => favorites.includes(recipe.id))
      .flatMap(recipe => recipe.categories || []);

    const recommendations = recipes
      .filter(recipe => 
        !favorites.includes(recipe.id) &&
        recipe.categories?.some(cat => favoriteCategories.includes(cat))
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    set({ recommendations });
  }
}));

export default useRecipeStore;