import React from "react"
import useSearchByCategory from "../../custom-hooks/useSearchByCategory"
import recipeImg from "../../images/search/recipe.svg"
import nutritionImg from "../../images/search/nutrition.svg"
import ingredientsImg from "../../images/search/ingredients.svg"
import { Container, Grid, Typography } from "@mui/material"

function Search({ isFavoritePage, isRecipePage }) {
	const columnComponents = useSearchByCategory(isFavoritePage, isRecipePage)

	return <div className="search">{columnComponents}</div>
}

function NewSearch({ isFavoritePage, isRecipePage }) {
	return (
		<Container style={{ padding: "4rem 0" }}>
			<Typography variant="h2" gutterBottom textAlign="center">
				Search By...
			</Typography>
			<Grid
				container
				spacing={3}
				direction="row"
				justifyContent="center"
				alignItems="center"
				columns={{ xs: 5, lg: 12 }}
			>
				<Grid item xs={3} lg={4}>
					<img
						src={recipeImg}
						alt="Recipe icon"
						style={{ width: "8rem", display: "block", margin: "2rem auto" }}
					/>
					<Typography variant="h3" textAlign="center" gutterBottom>
						Recipes
					</Typography>
					<Typography variant="body" paragraph textAlign="center" gutterBottom>
						Looking for a new recipe to learn and sink your teeth into? No
						problem, you can search for a general for specific recipe!
					</Typography>
				</Grid>
				<Grid item xs={3} lg={4}>
					<img
						src={ingredientsImg}
						alt="Ingredients icon"
						style={{ width: "8rem", display: "block", margin: "2rem auto" }}
					/>
					<Typography variant="h3" textAlign="center" gutterBottom>
						Ingredients
					</Typography>
					<Typography variant="body" paragraph textAlign="center" gutterBottom>
						Don't know what recipe to search for, but know exactly what is to be
						included? You can search for recipes by ingredients!
					</Typography>
				</Grid>
				<Grid item xs={3} lg={4}>
					<img
						src={nutritionImg}
						alt="Nutrition icon"
						style={{ width: "8rem", display: "block", margin: "2rem auto" }}
					/>
					<Typography variant="h3" textAlign="center" gutterBottom>
						Nutrition
					</Typography>
					<Typography variant="body" paragraph textAlign="center" gutterBottom>
						Look for new recipes to meet your nutritional needs? Filter recipes
						based on nutritional values from carbs to zinc!
					</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default NewSearch
