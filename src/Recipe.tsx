import React from 'react';
import { IRecipe } from './types';

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe-card">
      <h3>{recipeData.name}</h3>
      <p><strong>Ingredients:</strong> {recipeData.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipeData.servings}</p>
    </div>
  );
};

export default Recipe;
