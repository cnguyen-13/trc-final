import React from "react"
import useIsMinimum from "../../../custom-hooks/useIsMinimum"

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

export default InputLabel
