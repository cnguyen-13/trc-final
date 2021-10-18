import React from "react"
import { CardMedia } from "@mui/material"
import useLargerImage from "../../../custom-hooks/useLargerImage"

function RecipeImage({ recipe }) {
	const [source, alt] = useLargerImage(recipe)

	return (
		<CardMedia
			style={{ position: "relative" }}
			component="img"
			image={source}
			alt={alt}
		></CardMedia>
	)
}

export default RecipeImage
