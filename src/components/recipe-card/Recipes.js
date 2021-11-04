import React from "react"
import RecipeCard from "./RecipeCard"
import { Container, Grid, Typography } from "@mui/material"

function Recipes({ query, recipes }) {
	const recipeCardsComponents = recipes.map(recipe => {
		return <RecipeCard key={recipe.id} recipe={recipe} />
	})

	return (
		<Container style={{ padding: "4rem 0" }}>
			<Typography variant="h2" textAlign="center" gutterBottom>
				{`${query.toUpperCase()} Recipes!`}
			</Typography>
			<Grid container spacing={3} style={{ marginTop: "2rem" }}>
				{recipeCardsComponents}
			</Grid>
		</Container>
	)
}
export default Recipes
