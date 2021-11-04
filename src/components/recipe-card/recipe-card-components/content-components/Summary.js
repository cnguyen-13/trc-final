import { Typography } from "@mui/material"
import React from "react"
import ClampLines from "react-clamp-lines"
import useHTMLParser from "../../../../hooks/useHTMLParser"

function Summary({ recipe }) {
	const { summary } = recipe
	const parsedHTMLText = useHTMLParser(summary)

	return (
		<Typography variant="body2" paragraph>
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
