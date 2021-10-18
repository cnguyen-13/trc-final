import React from "react"
import useCommaList from "../../../../custom-hooks/useCommaList"
import { Typography } from "@mui/material"

function Tags({ recipe }) {
	const { dishTypes } = recipe
	const dishesString = useCommaList(dishTypes)

	// return <p className="recipes__tags">{dishesString}</p>
	return (
		<Typography variant="body2" paragraph gutterBottom>
			{dishesString}
		</Typography>
	)
}

export default Tags
