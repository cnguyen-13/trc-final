import { getLargerImage } from "../functions/larger-image"

export default function useLargerImage(recipe) {
	const { id, title } = recipe
	const source = getLargerImage(id)
	return [source, title]
}
