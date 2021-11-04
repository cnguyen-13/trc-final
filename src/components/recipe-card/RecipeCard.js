import React from "react"
import { Grid, Card } from "@mui/material"
import RecipeImage from "./recipe-card-components/RecipeImage"
import Heart from "./recipe-card-components/Heart"
import Content from "./recipe-card-components/Content"
import Footer from "./recipe-card-components/Footer"

function RecipeCard({ recipe }) {
	return (
		<Grid item xs={12} sm={6} lg={4}>
			<Card style={{ position: "relative" }}>
				<RecipeImage recipe={recipe} />
				<Heart recipe={recipe} />
				<Content recipe={recipe} />
				<Footer recipe={recipe} />
			</Card>
		</Grid>
	)
}

export default RecipeCard
