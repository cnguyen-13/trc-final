import React from "react"
import { Checkbox, FormControlLabel } from "@mui/material"

function CheckboxOption({ data, category, onChangeFilter, checked }) {
	return (
		<div className="filter__checkbox">
			<input
				className="filter__input"
				data-category={category}
				type="checkbox"
				value={data}
				id={data}
				onChange={onChangeFilter}
				checked={checked}
			/>
			<label className="filter__label" htmlFor={data}>
				{data}
			</label>
		</div>
	)
}

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
