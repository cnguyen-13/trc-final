import React from "react"
import NewDropDownOption from "./DropDownOption.js"
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

function DropDown({ onChangeFilter, category, value, values }) {
	const typeSelectComponents = values.map((diet, idx) => {
		return <NewDropDownOption data={diet} key={`${diet}_${idx}`} />
	})
	return (
		<select
			className="filter__drop-down"
			onChange={onChangeFilter}
			data-category={category}
			value={value}
		>
			{typeSelectComponents}
		</select>
	)
}

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
