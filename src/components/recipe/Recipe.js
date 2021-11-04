import React from "react"
import useHTMLParser from "../../hooks/useHTMLParser"
import useLargerImage from "../../hooks/useLargerImage"
import { Grid, Container } from "@mui/material"
import Nutrition from "./recipe-components/Nutrition"
import { commaList } from "../../functions/comma-list"
import Description from "./recipe-components/Description"
import Image from "./recipe-components/Image"
import Ingredients from "./recipe-components/Ingredients"
import Instructions from "./recipe-components/Instructions"

function Recipe({ recipe }) {
	const summary = useHTMLParser(recipe.summary)
	const [source, title] = useLargerImage(recipe)

	return (
		<Container style={{ marginTop: 150 }}>
			<Grid container spacing={5}>
				<Description
					title={recipe.title}
					dishTypes={commaList(recipe.dishTypes)}
					summary={summary}
				/>
				<Image source={source} title={title} />
				<Ingredients extendedIngredients={recipe.extendedIngredients} />
				<Instructions analyzedInstructions={recipe.analyzedInstructions} />
				<Nutrition nutrition={recipe.nutrition} />
			</Grid>
		</Container>
	)
}

export default Recipe
