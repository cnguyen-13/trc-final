import { useState } from "react"
import { getRecipes } from "../functions/get-recipes"
import { buildEndpoint } from "../functions/build-endpoint"

export default function useFetchRecipes(query, filterSettings, queryResetFunc) {
	const [recipes, setRecipes] = useState([])

	async function onClickSubmit() {
		const endPoint = buildEndpoint(query, filterSettings)
		const recipes = await getRecipes(endPoint)
		setRecipes(recipes)
		queryResetFunc()
	}

	return { recipes, onClickSubmit }
}
