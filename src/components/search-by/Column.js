import React from "react"
import { Grid, Typography } from "@mui/material"

function Column({ icon, title, text }) {
	return (
		<Grid item xs={11} lg={4}>
			<img
				src={icon}
				alt={`${title} Icon`}
				style={{ width: "8rem", display: "block", margin: "2rem auto" }}
			/>
			<Typography variant="h3" textAlign="center" gutterBottom>
				{title}
			</Typography>
			<Typography variant="body2" paragraph textAlign="center" gutterBottom>
				{text}
			</Typography>
		</Grid>
	)
}

export default Column
