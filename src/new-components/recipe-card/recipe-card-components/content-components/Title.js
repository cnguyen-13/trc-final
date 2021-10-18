import React from "react"
import ClampLines from "react-clamp-lines"
import { Typography } from "@mui/material"

function Title({ recipe }) {
	const { title } = recipe

	return (
		<Typography gutterBottom>
			<ClampLines
				text={title}
				lines={1}
				ellipsis="..."
				className="recipes__title"
				innerElement="h3"
				buttons={false}
			/>
		</Typography>
	)
}

export default Title
