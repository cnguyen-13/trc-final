export function indexOfRecipe(recipes, id) {
	for (let i = 0; i < recipes.length; i++) {
		const recipe = recipes[i]
		if (recipe.id === id) return i
	}
	return -1
}
