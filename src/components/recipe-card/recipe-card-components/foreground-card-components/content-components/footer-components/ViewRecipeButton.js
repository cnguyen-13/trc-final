import React from "react"
import { Link } from "react-router-dom"
import { hypenateTitle } from "../../../../../../functions/hypen-recipe"

function ViewRecipeButton({ recipe }) {
	const { title } = recipe

	return (
		<Link to={`recipe/${hypenateTitle(title)}`}>
			<button className="recipes__btn">View Recipe!</button>
		</Link>
	)
}

export default ViewRecipeButton
