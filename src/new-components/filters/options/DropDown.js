import React from "react"
import DropDownOption from "./DropDownOption.js"

function DropDown({ onChangeFilter, category, value, values }) {
	const typeSelectComponents = values.map((diet, idx) => {
		return <DropDownOption data={diet} key={`${diet}_${idx}`} />
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

export default DropDown
