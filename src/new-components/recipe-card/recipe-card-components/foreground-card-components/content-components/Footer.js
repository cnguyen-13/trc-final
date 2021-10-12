import React from "react"
import ViewRecipeButton from "./footer-components/ViewRecipeButton"
import CookTime from "./footer-components/CookTime"

function Footer({ recipe }) {
	return (
		<footer className="recipes__footer">
			<ViewRecipeButton recipe={recipe} />
			<CookTime recipe={recipe} />
		</footer>
	)
}

export default Footer
