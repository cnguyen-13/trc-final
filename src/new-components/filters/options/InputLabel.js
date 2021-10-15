import React from "react"
import useIsMinimum from "../../../custom-hooks/useIsMinimum"
import { Input, TextField } from "@mui/material"

function InputLabel({ id, idx, onChangeFilter, category, value }) {
	const isMinimumInput = useIsMinimum(id)

	return (
		<div className="filter__nutrition-input">
			<label className="filter__label" htmlFor={id}>
				{isMinimumInput ? "Min" : "Max"}
			</label>
			<input
				className="filter__input"
				id={id}
				data-idx={idx}
				data-min-or-max={isMinimumInput ? "min" : "max"}
				data-category={category}
				type="number"
				placeholder={isMinimumInput ? "Minimum value" : "Maximum value"}
				onChange={onChangeFilter}
				value={value}
			/>
		</div>
	)
}

function NewInputLabel({ id, idx, onChangeFilter, category, value }) {
	const isMinimumInput = useIsMinimum(id)

	return (
		<Input
			type="number"
			style={{
				marginRight: `${isMinimumInput ? "0.5rem" : 0}`,
				paddingRight: 0,
			}}
			id={id}
			value={value}
			onChange={onChangeFilter}
			placeholder={isMinimumInput ? "Min" : "Max"}
			inputProps={{
				inputMode: "number",
				pattern: "[0-9]*",
				"data-category": category,
				"data-min-or-max": isMinimumInput ? "min" : "max",
				"data-idx": idx,
				style: {
					textAlign: "center",
				},
			}}
		/>
	)
}

export default NewInputLabel
