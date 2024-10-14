import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  // Fetch the list of tags from the API
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes/tags');
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  // Fetch the recipes for the selected tag
  useEffect(() => {
    if (selectedTag) {
      const fetchRecipes = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
          const data = await response.json();
          setRecipes(data.recipes);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
      fetchRecipes();
    }
  }, [selectedTag]);

  const handleTagSelect = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <RecipeList recipes={recipes} onBack={handleBackToTags} />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
      )}
    </div>
  );
};

export default App;
