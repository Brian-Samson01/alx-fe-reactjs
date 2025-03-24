import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
};

export default App;
