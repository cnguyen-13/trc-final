import React from "react"
import NewDropDownOption from "./DropDownOption.js"
import { Select } from "@mui/material"

function NewDropDown({ onChangeFilter, category, value, values }) {
	const typeSelectComponents = values.map((diet, idx) => {
		return <NewDropDownOption data={values[idx]} key={`${diet}_${idx}`} />
	})

	return (
		<Select
			value={value}
			style={{ width: 222, padding: "0rem" }}
			onChange={onChangeFilter}
			native
			inputProps={{
				"data-category": category,
			}}
		>
			{typeSelectComponents}
		</Select>
	)
}
export default NewDropDown
