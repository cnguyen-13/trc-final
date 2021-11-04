import React from "react"
import { TableHead, TableRow, TableCell } from "@mui/material"

function Header() {
	return (
		<TableHead>
			<TableRow>
				<TableCell>Nutrient</TableCell>
				<TableCell>Amount</TableCell>
				<TableCell>% Daily Needs</TableCell>
			</TableRow>
		</TableHead>
	)
}

export default Header
