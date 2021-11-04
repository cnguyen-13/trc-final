import React from "react"
import useMinMax from "../../../hooks/useMinMax"
import NewInputLabel from "./InputLabel"
import { Grid, Typography } from "@mui/material"

function MinMaxOption({ data, category, onChangeFilter, idx }) {
	const [name, minId, minValue, maxId, maxValue] = useMinMax(data)

	return (
		<Grid
			container
			columns={{ xs: 11 }}
			alignItems="center"
			style={{ marginBottom: "0.5rem" }}
		>
			<Grid item xs={4} md={3}>
				<Typography variant="body2" component="h4">
					{name}
				</Typography>
			</Grid>
			<Grid item xs={3} md={3}>
				<NewInputLabel
					id={minId}
					idx={idx}
					onChangeFilter={onChangeFilter}
					category={category}
					value={minValue}
				/>
			</Grid>
			<Grid item xs={1} md={1}>
				<Typography variant="body2" textAlign="center">
					-
				</Typography>
			</Grid>
			<Grid item xs={3} md={3}>
				<NewInputLabel
					id={maxId}
					idx={idx}
					onChangeFilter={onChangeFilter}
					category={category}
					value={maxValue}
				/>
			</Grid>
		</Grid>
	)
}

export default MinMaxOption
