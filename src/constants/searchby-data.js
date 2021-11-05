import recipeImg from "../images/search/recipe.svg"
import nutritionImg from "../images/search/nutrition.svg"
import ingredientsImg from "../images/search/ingredients.svg"
import removeImg from "../images/favorites/remove.svg"
import reviewImg from "../images/favorites/heart.svg"

export const SEARCH_BY_DATA = [
	{
		ICON: recipeImg,
		TITLE: "Recipes",
		TEXT: "Looking for a new recipe to learn and sink your teeth into? No problem, you can search for a general for specific recipe!",
	},
	{
		ICON: ingredientsImg,
		TITLE: "Ingredients",
		TEXT: "Don't know what recipe to search for, but know exactly what is to be included? You can search for recipes by ingredients!",
	},
	{
		ICON: nutritionImg,
		TITLE: "Nutrition",
		TEXT: "Look for new recipes to meet your nutritional needs? Filter recipes based on nutritional values from carbs to zinc!",
	},
]

export const SEARCH_BY_FAVORITES = [
	{
		ICON: removeImg,
		TITLE: "Remove",
		TEXT: "If a recipe doesn't seem good anymore, you can remove it by 'unhearting' it! You can always add it again in the future!",
	},
	{
		ICON: reviewImg,
		TITLE: "Review",
		TEXT: "This page is a collection of all of the recipes you have 'hearted' up until now, review your favorited recipes here!",
	},
]
