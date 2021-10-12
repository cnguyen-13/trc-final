import { FAVORITES } from "../constants/local-storage-favorites"

export function createLocalStorage() {
	const favorites = JSON.parse(localStorage.getItem(FAVORITES))
	if (!favorites) localStorage.setItem(FAVORITES, JSON.stringify([]))
}
