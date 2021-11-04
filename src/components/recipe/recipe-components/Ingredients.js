import React from "react"
import { Grid, Typography } from "@mui/material"

function Ingredients({ extendedIngredients }) {
	const ingredients = extendedIngredients.map(ingredient => {
		return (
			<li key={ingredient.original}>
				<Typography variant="body2" gutterBottom>
					{`• ${ingredient.original}`}
				</Typography>
			</li>
		)
	})

	const ingredientsList = <ul style={{ listStyle: "none" }}>{ingredients}</ul>

	return (
		<Grid item xs={12} md={6}>
			<Typography variant="h4" component="h2" gutterBottom>
				Ingredients
			</Typography>
			{ingredientsList}
		</Grid>
	)
}

export default Ingredients
