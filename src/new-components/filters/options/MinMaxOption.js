import React from "react"
import useMinMax from "../../../custom-hooks/useMinMax"
import InputLabel from "./InputLabel"

function MinMaxOption({ data, category, onChangeFilter, idx }) {
	const [name, minId, minValue, maxId, maxValue] = useMinMax(data)

	return (
		<div className="filter__nutrition">
			<h4 className="filter__nutrition-title">{name}</h4>
			<InputLabel
				id={minId}
				idx={idx}
				onChangeFilter={onChangeFilter}
				category={category}
				value={minValue}
			/>
			<InputLabel
				id={maxId}
				idx={idx}
				onChangeFilter={onChangeFilter}
				category={category}
				value={maxValue}
			/>
		</div>
	)
}

export default MinMaxOption
