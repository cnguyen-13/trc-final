import React from "react"
import NavBar from "../components/nav-bar/NavBar"
import { Typography, Container } from "@mui/material"

const MESSAGES = {
	PENDING: (
		<Typography variant="h3" component="h1">
			Pending...
		</Typography>
	),
	ERROR: (
		<Typography variant="h3" component="h1">
			Error Getting Recipe Data...
		</Typography>
	),
	NONEXIST: (
		<Typography variant="h3" component="h1">
			Recipe Doesn't Exist...
		</Typography>
	),
	NOTHING: (
		<Typography variant="h3" component="h1">
			Error Fetching Recipe Data, Check Recipe Name...
		</Typography>
	),
}

export const MINI_PAGES = {
	PENDING: (
		<>
			<NavBar isRecipePage />
			<Container style={{ marginTop: 150 }}>{MESSAGES.PENDING}</Container>
		</>
	),

	ERROR: (
		<>
			<NavBar isRecipePage />
			<Container style={{ marginTop: 150 }}>{MESSAGES.ERROR}</Container>
		</>
	),

	NONEXIST: (
		<>
			<NavBar isRecipePage />
			<Container style={{ marginTop: 150 }}>{MESSAGES.NONEXIST}</Container>
		</>
	),
	NOTHING: (
		<>
			<NavBar isRecipePage />
			<Container style={{ marginTop: 150 }}>{MESSAGES.NOTHING}</Container>
		</>
	),
}
