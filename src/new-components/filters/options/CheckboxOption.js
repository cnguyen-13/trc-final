import React from "react"

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

export default CheckboxOption
