import React from "react"
import { Grid, Typography } from "@mui/material"

function Instructions({ analyzedInstructions }) {
	const instructions = analyzedInstructions[0].steps.map(({ number, step }) => {
		return (
			<li key={number}>
				<Typography variant="body2" gutterBottom>
					{`${number}. ${step}`}
				</Typography>
			</li>
		)
	})

	const instructionsList = <ol style={{ listStyle: "none" }}>{instructions}</ol>

	return (
		<Grid item xs={12} md={6}>
			<Typography variant="h4" component="h2" gutterBottom>
				Instructions
			</Typography>
			{instructionsList}
		</Grid>
	)
}

export default Instructions
