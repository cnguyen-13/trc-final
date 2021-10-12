import axios from "axios"

export async function getRecipes(endPoint) {
	try {
		const response = await axios.get(endPoint)
		return response.data.results
	} catch (err) {
		return []
	}
}
