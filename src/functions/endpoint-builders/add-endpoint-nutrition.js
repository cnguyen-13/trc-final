export function addEndpointNutrition({ list }) {
	let endpoint = ""

	for (const { min, max } of list) {
		if (min.value) endpoint += min.parameter + min.value
		if (max.value) endpoint += max.parameter + max.value
	}

	return endpoint
}
