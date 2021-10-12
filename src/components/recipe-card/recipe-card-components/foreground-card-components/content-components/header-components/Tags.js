import React from "react"
import useCommaList from "../../../../../../custom-hooks/useCommaList"

function Tags({ recipe }) {
	const { dishTypes } = recipe
	const dishesString = useCommaList(dishTypes)

	return <p className="recipes__tags">{dishesString}</p>
}

export default Tags
