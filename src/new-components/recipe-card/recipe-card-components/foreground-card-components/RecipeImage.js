import React from "react"
import Image from "./image-components/Image"
import Heart from "./image-components/Heart"

function RecipeImage({ recipe }) {
	return (
		<div className="recipes__upper">
			<Heart recipe={recipe} />
			<Image recipe={recipe} />
		</div>
	)
}

export default RecipeImage
