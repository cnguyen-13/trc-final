import React from "react"
import { Grid, Typography } from "@mui/material"

function Description({ title, dishTypes, summary }) {
	return (
		<Grid item xs={12} md={6}>
			<Typography variant="h3" component="h1">
				{title}
			</Typography>
			<Typography
				variant="body1"
				style={{ fontStyle: "italic", marginBottom: "1rem" }}
			>
				{dishTypes}
			</Typography>
			<Typography variant="body2">{summary}</Typography>
		</Grid>
	)
}

export default Description
