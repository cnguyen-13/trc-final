import React from "react"
import { useParams } from "react-router-dom"
import { useAsync } from "react-async"
import NavigationBar from "../components/nav-bar/NavigationBar"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import RecipeDetails from "../components/recipe/RecipeDetails"
import { MINI_PAGES } from "../constants/recipe-messages"
import { getSingleRecipe } from "../functions/get-single-recipe"

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
					<NavigationBar />
					<Hero recipe={data} isRecipePage />
					<Search isRecipePage />
					<RecipeDetails recipe={data} />
				</>
			)
		} catch (err) {
			return MINI_PAGES.NONEXIST
		}
	}
	return MINI_PAGES.NOTHING
}

export default RecipePage
