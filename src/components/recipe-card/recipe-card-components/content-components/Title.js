import { Typography } from "@mui/material"
import React from "react"
import ClampLines from "react-clamp-lines"

function Title({ recipe }) {
	const { title } = recipe

	return (
		<Typography variant="h6" component="h3">
			<ClampLines text={title} lines={1} ellipsis="..." buttons={false} />
		</Typography>
	)
}

export default Title
