import React from "react"
import Header from "./Header"
import Row from "./Row"
import {
	Table,
	TableBody,
	Typography,
	TableContainer,
	Grid,
} from "@mui/material"

function Nutrition({ nutrition }) {
	const { nutrients } = nutrition

	const tableRows = nutrients.map(
		({ name, amount, unit, percentOfDailyNeeds }) => {
			return (
				<Row
					key={name}
					name={name}
					amount={amount}
					unit={unit}
					percentOfDailyNeeds={percentOfDailyNeeds}
				/>
			)
		}
	)

	return (
		<Grid item xs={12} style={{ marginBottom: "10rem" }}>
			<Typography variant="h4" component="h2" gutterBottom>
				Nutrition
			</Typography>
			<TableContainer>
				<Table>
					<Header />
					<TableBody>{tableRows}</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	)
}

export default Nutrition
