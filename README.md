# The Cookbook Reference Remake

This is a remake of the original 'The Cookbook Reference' in my repository. It uses the spoonacular API and various packages.

## About

Users can find new recipes based on their needs rather it is a specific dish, cuisine, ingredient, and/or nutritional value. Recipes
can be viewed (on page and original external page) and "liked" for future reference.

## To Run Locally on Your Computer

1. Get API Key from Open Weather Map ( https://spoonacular.com/food-api )
2. Download project folder
3. In the project folder, create a ".env" file (will keep your API Key from steps #1 )
4. Inside of the ".env" file, type
   REACT_APP_SPOONACULAR_API_KEY={YOUR_API_KEY}
   REACT_APP_BASE_URL=https://api.spoonacular.com/recipes/complexSearch?apiKey={YOUR_API_KEY}&number=8&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true
   REACT_APP_BASE_URL_RECIPE=https://api.spoonacular.com/recipes/{id}/information?apiKey={YOUR_API_KEY}&includeNutrition=true
5. Using your terminal, change directory to project
6. While in your terminal, 'npm install' to install all dependencies
7. While in your terminal, 'npm start' to load the project
8. Enjoy!

## Tech Used

- HTML
- CSS/SASS (BEM Naming Convention)
- JavaScript (ES6+)
- API
- GSAP (Animation)
- ReactJS (React Router Dom, Hooks, ContextAPI, Custom Hooks)
- Figma (For design / UI Planning)
