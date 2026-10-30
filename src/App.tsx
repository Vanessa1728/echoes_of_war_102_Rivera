
import { useState } from "react";
import Index from "./views/Index/Index";
import RecipeInfo from "./views/RecipeInfo/RecipeInfo.tsx";
import type { Recipe } from "./data/recipes";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="app">
      {selectedRecipe ? (
        <RecipeInfo
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <Index onViewRecipe={setSelectedRecipe} />
      )}
    </div>
  );
}

export default App;
