import React from "react"
import { Checkbox, FormControlLabel } from "@mui/material"

function NewCheckboxOption({ data, category, onChangeFilter, checked }) {
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					value={data}
					id={data}
					onChange={onChangeFilter}
					inputProps={{ "data-category": category }}
				/>
			}
			label={data}
		/>
	)
}

export default NewCheckboxOption
