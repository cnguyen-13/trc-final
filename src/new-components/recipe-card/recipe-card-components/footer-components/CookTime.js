import React from "react"

import { cookTimeText } from "../../../../functions/cook-time-text"
import { Typography } from "@mui/material"
import TimerIcon from "@mui/icons-material/Timer"

function CookTime({ recipe }) {
	const { readyInMinutes } = recipe

	return (
		<div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
			<TimerIcon />
			<Typography variant="body1">
				{`${readyInMinutes} ${cookTimeText(readyInMinutes)}`}
			</Typography>
		</div>
	)
}

export default CookTime
