import React from "react"
import { TextField } from "@mui/material"

function NewNumberInput({ value, onChangeFilter }) {
	return (
		<TextField
			helperText="# of recipes to display"
			id="number-input"
			value={value}
			onChange={onChangeFilter}
			placeholder="all"
			inputProps={{
				inputMode: "numeric",
				pattern: "[0-9]*",
				"data-category": "number",
				style: {
					padding: "0.5rem 1.25rem",
				},
			}}
		/>
	)
}

export default NewNumberInput
