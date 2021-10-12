import React from "react"
import RecipeImage from "./foreground-card-components/RecipeImage"
import Content from "./foreground-card-components/Content"

function ForegroundCard({ innerRef, recipe }) {
	return (
		<div className="recipes__foreground" ref={innerRef}>
			<RecipeImage recipe={recipe} />
			<Content recipe={recipe} />
		</div>
	)
}

export default ForegroundCard
