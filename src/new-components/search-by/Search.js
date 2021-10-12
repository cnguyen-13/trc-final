import React from "react"
import useSearchByCategory from "../../custom-hooks/useSearchByCategory"

function Search({ isFavoritePage, isRecipePage }) {
	const columnComponents = useSearchByCategory(isFavoritePage, isRecipePage)

	return <div className="search">{columnComponents}</div>
}

export default Search
