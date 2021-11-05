import { CATEGORIES } from "../constants/filter-categories"
import { addEndpointList } from "./endpoint-builders/add-endpoint-list"
import { addEndpointValue } from "./endpoint-builders/add-endpoint-value"
import { addEndpointNutrition } from "./endpoint-builders/add-endpoint-nutrition"
import { noSpaces } from "./endpoint-builders/no-spaces"

export function buildEndpoint(query, settings = {}) {
	let endPoint = `${process.env.REACT_APP_BASE_URL}&query=${query}`

	for (const prop in settings) {
		const data = settings[prop]
		if (prop === CATEGORIES.CUISINES || prop === CATEGORIES.INTOLERANCES)
			endPoint += addEndpointList(data)
		else if (
			prop === CATEGORIES.TYPES ||
			prop === CATEGORIES.DIETS ||
			prop === CATEGORIES.NUMBER
		)
			endPoint += addEndpointValue(data)
		else endPoint += addEndpointNutrition(data)
	}

	console.log(noSpaces(endPoint))
	return noSpaces(endPoint)
}
