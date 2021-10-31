import React from "react"
import NewNavBar from "../new-components/nav-bar/NavigationBar"
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
		<Container>
			<NewNavBar isRecipePage />
			{MESSAGES.PENDING}
		</Container>
	),

	ERROR: (
		<Container>
			<NewNavBar isRecipePage />
			{MESSAGES.ERROR}
		</Container>
	),

	NONEXIST: (
		<Container>
			<NewNavBar isRecipePage />
			{MESSAGES.NONEXIST}
		</Container>
	),
	NOTHING: (
		<Container>
			<NewNavBar isRecipePage />
			{MESSAGES.NOTHING}
		</Container>
	),
}
