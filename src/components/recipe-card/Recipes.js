import React from "react"
import RecipeCard from "./RecipeCard"

function Recipes({ query, recipes }) {
	const recipeCardsComponents = recipes.map(recipe => {
		return <RecipeCard key={recipe.id} recipe={recipe} />
	})

	return (
		<section className="section-container">
			<h2 className="section-container__title">{`${query.toUpperCase()} Recipes!`}</h2>
			<div className="recipes">
				{recipeCardsComponents.length === 0
					? "Start Adding Recipes to Your Collection, they will be displayed here!"
					: recipeCardsComponents}
			</div>
		</section>
	)
}

export default Recipes
