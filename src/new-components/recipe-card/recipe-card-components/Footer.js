import React from "react"
import ViewRecipeButton from "./footer-components/ViewRecipeButton"
import CookTime from "./footer-components/CookTime"
import { CardActions } from "@mui/material"

function Footer({ recipe }) {
	return (
		<CardActions
			style={{
				justifyContent: "space-between",
				padding: "1rem",
			}}
		>
			<CookTime recipe={recipe} />
			<ViewRecipeButton recipe={recipe} />
		</CardActions>
	)
}

export default Footer
