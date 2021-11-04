import React from "react"
import useCommaList from "../../../../hooks/useCommaList"
import { Typography } from "@mui/material"

function Tags({ recipe }) {
	const { dishTypes } = recipe
	const dishesString = useCommaList(dishTypes)

	return (
		<Typography
			variant="body2"
			paragraph
			gutterBottom
			style={{ fontStyle: "italic" }}
		>
			{dishesString}
		</Typography>
	)
}

export default Tags
