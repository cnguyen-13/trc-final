import React from "react"
import { useParams } from "react-router-dom"
import { useAsync } from "react-async"
import Recipe from "../components/recipe/Recipe"
import { MINI_PAGES } from "../constants/recipe-messages"
import { getSingleRecipe } from "../functions/get-single-recipe"
import NavBar from "../components/nav-bar/NavBar"
import Footer from "../components/footer/Footer"

function RecipePage() {
	const { recipeName } = useParams()
	const { data, error, isPending } = useAsync({
		promiseFn: getSingleRecipe,
		recipeName: recipeName,
	})

	if (isPending) return MINI_PAGES.PENDING
	if (error) return MINI_PAGES.ERROR
	if (data) {
		try {
			return (
				<>
					<NavBar isRecipePage />
					<Recipe recipe={data} />
					<Footer />
				</>
			)
		} catch (err) {
			return MINI_PAGES.NONEXIST
		}
	}
	return MINI_PAGES.NOTHING
}

export default RecipePage
