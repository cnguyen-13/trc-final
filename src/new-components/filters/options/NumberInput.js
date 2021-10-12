import React from "react"

function NumberInput({ value, onChangeFilter }) {
	return (
		<div className="filter__number">
			<input
				className="filter__input"
				id="number-input"
				type="number"
				placeholder="all"
				value={value}
				onChange={onChangeFilter}
				data-category="number"
			/>
		</div>
	)
}

export default NumberInput
