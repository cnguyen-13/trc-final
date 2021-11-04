import Column from "../components/search-by/Column"
import {
	SEARCH_BY_RECIPE,
	SEARCH_BY_DATA,
	SEARCH_BY_FAVORITES,
} from "../constants/searchby-data"

function getCategories(isFavoritePage, isRecipePage) {
	if (isFavoritePage) return SEARCH_BY_FAVORITES
	if (isRecipePage) return SEARCH_BY_RECIPE
	return SEARCH_BY_DATA
}

export default function useSearchByCategory(isFavoritePage, isRecipePage) {
	const categories = getCategories(isFavoritePage, isRecipePage)
	const columnComponents = categories.map(category => {
		const { TITLE, CLASS } = category
		return <Column categoryText={category} background={CLASS} key={TITLE} />
	})

	return columnComponents
}
