import React from "react"
import ClampLines from "react-clamp-lines"
import useHTMLParser from "../../../../custom-hooks/useHTMLParser"
import { Typography } from "@mui/material"

function Summary({ recipe }) {
	const { summary } = recipe
	const parsedHTMLText = useHTMLParser(summary)

	return (
		<Typography variant="body1" gutterBottom>
			<ClampLines
				text={parsedHTMLText}
				lines={5}
				ellipsis="..."
				innerElement="p"
				buttons={false}
			/>
		</Typography>
	)
}

export default Summary
