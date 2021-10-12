import React from "react"
import ForegroundCard from "./recipe-card-components/ForegroundCard"
import BackgroundCard from "./recipe-card-components/BackgroundCard"
import useRecipeCardAnimation from "../../custom-hooks/useRecipeCardAnimation"

function RecipeCard({ recipe }) {
	const { card, foreground, background } = useRecipeCardAnimation()

	return (
		<div className="recipes__card" ref={card}>
			<ForegroundCard innerRef={foreground} recipe={recipe} />
			<BackgroundCard innerRef={background} />
		</div>
	)
}

export default RecipeCard
