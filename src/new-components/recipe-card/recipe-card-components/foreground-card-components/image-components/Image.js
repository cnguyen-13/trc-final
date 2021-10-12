import React from "react"
import useLargerImage from "../../../../../custom-hooks/useLargerImage"

function Image({ recipe }) {
	const [source, alt] = useLargerImage(recipe)

	return <img className="recipes__image" src={source} alt={alt} />
}

export default Image
