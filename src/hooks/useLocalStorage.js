import { useState } from "react"
import { isRecipeFavorited } from "../functions/is-recipe-favorited"
import { indexOfRecipe } from "../functions/index-of-recipe"
import { FAVORITES } from "../constants/local-storage-favorites"

export default function useLocalStorage(recipe) {
	const { id } = recipe
	const [isFavorited, setIsFavorited] = useState(isRecipeFavorited(id))

	function onClickHeart() {
		const favorites = JSON.parse(localStorage.getItem(FAVORITES))

		isFavorited
			? favorites.splice(indexOfRecipe(favorites, id), 1)
			: favorites.push(recipe)

		localStorage.setItem(FAVORITES, JSON.stringify(favorites))
		setIsFavorited(prevStatus => !prevStatus)
	}

	return [isFavorited, onClickHeart]
}
