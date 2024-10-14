import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './types';

interface IRecipeListProps {
  recipes: IRecipe[];
  onBack: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Tags</button>
      <h2>Recipe List</h2>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
