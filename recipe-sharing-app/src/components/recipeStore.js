import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // State
  recipes: [],
  searchTerm: '',
  
  // Actions
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Memoized filtered recipes
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}));

export default useRecipeStore;