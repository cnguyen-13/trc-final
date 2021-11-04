import React from "react"
import { Grid } from "@mui/material"

function Image({ source, title }) {
	return (
		<Grid item xs={12} md={6}>
			<img style={{ width: "100%" }} src={source} alt={title} />
		</Grid>
	)
}

export default Image
