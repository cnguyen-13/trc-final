import { buildEndpoint } from "./build-endpoint"
import { getRecipes } from "./get-recipes"

export async function getSingleRecipe({ recipeName }) {
	const endpoint = buildEndpoint(recipeName)
	const recipes = await getRecipes(endpoint)
	return recipes[0]
}
