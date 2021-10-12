import React from "react"
import FilterControls from "./FilterControls"

function FilterHeader({ onClickReset }) {
	return (
		<header className="filter__header">
			<h2 className="filter__title">Filter Options</h2>
			<FilterControls onClickReset={onClickReset} />
		</header>
	)
}

export default FilterHeader
