import { FAVORITES } from "../constants/local-storage-favorites"

export function isRecipeFavorited(id) {
	const favoritedRecipes = JSON.parse(localStorage.getItem(FAVORITES))
	for (const recipe of favoritedRecipes) {
		if (recipe.id === id) return true
	}
	return false
}
