const DATA_PRE_TEXT = "Search By..."
const FAVORITES_PRE_TEXT = "You can..."
const RECIPE_PRE_TEXT = "Look up..."

const BG_PRIMARY = "search__column--primary"
const BG_SECONDARY = "search__column--secondary"
const BG_THIRD = "search__column--third"

export const SEARCH_BY_DATA = [
	{
		PRE_TEXT: DATA_PRE_TEXT,
		TITLE: "Recipes",
		TEXT: "Looking for a new recipe to learn and sink your teeth into? No problem, you can search for a general for specific recipe!",
		CLASS: BG_PRIMARY,
	},
	{
		PRE_TEXT: DATA_PRE_TEXT,
		TITLE: "Ingredients",
		TEXT: "Don't know what recipe to search for, but know exactly what is to be included? You can search for recipes by ingredients!",
		CLASS: BG_SECONDARY,
	},
	{
		PRE_TEXT: DATA_PRE_TEXT,
		TITLE: "Nutrition",
		TEXT: "Look for new recipes to meet your nutritional needs? Filter recipes based on nutritional values from carbs to zinc!",
		CLASS: BG_THIRD,
	},
]

export const SEARCH_BY_FAVORITES = [
	{
		PRE_TEXT: FAVORITES_PRE_TEXT,
		TITLE: "Remove Favorites",
		TEXT: "If a recipe doesn't seem good anymore, you can remove it by 'unhearting' it! You can always add it again in the future!",
		CLASS: BG_PRIMARY,
	},
	{
		PRE_TEXT: FAVORITES_PRE_TEXT,
		TITLE: "Review Favorites",
		TEXT: "This page is a collection of all of the recipes you have 'hearted' up until now, review your favorited recipes here!",
		CLASS: BG_SECONDARY,
	},
]

export const SEARCH_BY_RECIPE = [
	{
		PRE_TEXT: RECIPE_PRE_TEXT,
		TITLE: "Ingredients",
		TEXT: "Know the recipe ingredients!",
		CLASS: BG_PRIMARY,
	},
	{
		PRE_TEXT: RECIPE_PRE_TEXT,
		TITLE: "Instructions",
		TEXT: "Learn to cook the recipe!",
		CLASS: BG_SECONDARY,
	},
	{
		PRE_TEXT: RECIPE_PRE_TEXT,
		TITLE: "Nutrition",
		TEXT: "Find nutritional values",
		CLASS: BG_THIRD,
	},
]
