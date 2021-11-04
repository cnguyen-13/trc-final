import React from "react"
import { TableRow, TableCell } from "@mui/material"

function Row({ name, amount, unit, percentOfDailyNeeds }) {
	return (
		<TableRow>
			<TableCell>{name}</TableCell>
			<TableCell>{`${amount}${unit}`}</TableCell>
			<TableCell>{`${percentOfDailyNeeds}%`}</TableCell>
		</TableRow>
	)
}

export default Row
