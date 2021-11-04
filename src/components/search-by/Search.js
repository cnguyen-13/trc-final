import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import Column from "./Column"
import {
	SEARCH_BY_DATA,
	SEARCH_BY_FAVORITES,
} from "../../constants/searchby-data"

function Search({ isFavoritePage }) {
	const title = isFavoritePage ? "You can..." : "Search By..."
	const columns = isFavoritePage ? SEARCH_BY_FAVORITES : SEARCH_BY_DATA
	const columnComponents = columns.map(column => {
		return (
			<Column
				icon={column.ICON}
				title={column.TITLE}
				text={column.TEXT}
				key={column.TEXT}
			/>
		)
	})

	return (
		<Container style={{ padding: "4rem 0" }}>
			<Typography variant="h2" gutterBottom textAlign="center">
				{title}
			</Typography>
			<Grid
				container
				spacing={3}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				{columnComponents}
			</Grid>
		</Container>
	)
}

export default Search
