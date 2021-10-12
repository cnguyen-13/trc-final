import React from "react"
import heartUnfilled from "../../../../../images/recipe-card/heart-unfilled.svg"
import heartFilled from "../../../../../images/recipe-card/heart-filled.svg"
import useLocalStorage from "../../../../../custom-hooks/useLocalStorage"

function Heart({ recipe }) {
	const [isFavorited, onClickHeart] = useLocalStorage(recipe)

	return (
		<div className="recipes__heart-container">
			<img
				className="recipes__heart"
				src={isFavorited ? heartFilled : heartUnfilled}
				alt={isFavorited ? "Favorited Recipe" : "Unfavorited Recipe"}
				onClick={onClickHeart}
			/>
		</div>
	)
}

export default Heart
