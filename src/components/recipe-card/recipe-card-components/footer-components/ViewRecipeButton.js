import React from "react"
import { Link } from "react-router-dom"
import { hypenateTitle } from "../../../../functions/hypen-recipe"
import { Button } from "@mui/material"

function ViewRecipeButton({ recipe }) {
	const { title } = recipe

	return (
		<Link
			to={`recipe/${hypenateTitle(title)}`}
			style={{ textDecoration: "none" }}
		>
			<Button variant="contained" style={{ textDecoration: "none" }}>
				View Recipe!
			</Button>
		</Link>
	)
}

export default ViewRecipeButton
