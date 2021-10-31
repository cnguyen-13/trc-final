import React from "react"
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Typography,
	TableContainer,
} from "@mui/material"

function Nutrition({ nutrition }) {
	const { nutrients } = nutrition

	const tableRows = nutrients.map(
		({ name, amount, unit, percentOfDailyNeeds }) => {
			return (
				<TableRow>
					<TableCell>{name}</TableCell>
					<TableCell>{`${amount}${unit}`}</TableCell>
					<TableCell>{`${percentOfDailyNeeds}%`}</TableCell>
				</TableRow>
			)
		}
	)
	return (
		<section style={{ marginBottom: "10rem" }}>
			<Typography variant="h4" component="h2" gutterBottom>
				Nutrition
			</Typography>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Nutrient</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>% Daily Needs</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{tableRows}</TableBody>
				</Table>
			</TableContainer>
		</section>
	)
}

export default Nutrition
