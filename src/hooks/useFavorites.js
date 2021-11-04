import { FAVORITES } from "../constants/local-storage-favorites"

export default function useFavorites() {
	const favorites = JSON.parse(localStorage.getItem(FAVORITES)) || []
	return favorites
}
