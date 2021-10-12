import React from "react"
import NavigationBar from "../components/nav-bar/NavigationBar"

const MESSAGES = {
	PENDING: <h1 className="recipe__message">Pending...</h1>,
	ERROR: <h1 className="recipe__message">Error Getting Recipe Data...</h1>,
	NONEXIST: <h1 className="recipe__message">Recipe Doesn't Exist...</h1>,
	NOTHING: (
		<h1 className="recipe__message">
			Error Fetching Recipe Data, Check Recipe Name...
		</h1>
	),
}

export const MINI_PAGES = {
	PENDING: (
		<div>
			<NavigationBar />
			{MESSAGES.PENDING}
		</div>
	),

	ERROR: (
		<div>
			<NavigationBar />
			{MESSAGES.ERROR}
		</div>
	),

	NONEXIST: (
		<div>
			<NavigationBar />
			{MESSAGES.NONEXIST}
		</div>
	),
	NOTHING: (
		<div>
			<NavigationBar />
			{MESSAGES.NOTHING}
		</div>
	),
}
