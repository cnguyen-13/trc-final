import React from "react"
import useIsMinimum from "../../../hooks/useIsMinimum"
import { Input } from "@mui/material"

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
