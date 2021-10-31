import React from "react"
import useHTMLParser from "../../custom-hooks/useHTMLParser"
import useLargerImage from "../../custom-hooks/useLargerImage"
import { Typography, Grid, Container } from "@mui/material"
import Nutrition from "./recipe-components/Nutrition"
import { commaList } from "../../functions/comma-list"

function RecipeDetails({ recipe }) {
	const parsedText = useHTMLParser(recipe.summary)
	const [source, title] = useLargerImage(recipe)

	return (
		<Container style={{ marginTop: 150 }}>
			<Grid container spacing={5}>
				<Grid item xs={12} md={6} lg={6}>
					<Typography variant="h3" component="h1">
						{recipe.title}
					</Typography>
					<Typography
						variant="body1"
						style={{ fontStyle: "italic", marginBottom: "1rem" }}
					>
						{commaList(recipe.dishTypes)}
					</Typography>
					<Typography variant="body2">{parsedText}</Typography>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<img style={{ width: "100%" }} src={source} alt={title} />
				</Grid>

				<Grid item xs={12} md={6}>
					<section className="recipe__section">
						<Typography variant="h4" component="h2" gutterBottom>
							Ingredients
						</Typography>
						<ul>
							{recipe.extendedIngredients.map(ingredient => {
								return (
									<li key={ingredient.original}>
										<Typography variant="body2" gutterBottom>
											{`• ${ingredient.original}`}
										</Typography>
									</li>
								)
							})}
						</ul>
					</section>
				</Grid>

				<Grid item xs={12} md={6}>
					<section>
						<Typography variant="h4" component="h2" gutterBottom>
							Instructions
						</Typography>
						<ol>
							{recipe.analyzedInstructions[0].steps.map(({ number, step }) => {
								return (
									<li key={number}>
										<Typography variant="body2" gutterBottom>
											{`${number}. ${step}`}
										</Typography>
									</li>
								)
							})}
						</ol>
					</section>
				</Grid>

				<Grid item xs={12} lg={12}>
					<Nutrition nutrition={recipe.nutrition} />
				</Grid>
			</Grid>
		</Container>
	)
}

export default RecipeDetails
