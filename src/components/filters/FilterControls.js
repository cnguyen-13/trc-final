import React from "react"
import { toggleFilterOptions } from "../../functions/filter-toggles"

function FilterControls({ onClickReset }) {
	return (
		<div className="filter__controls">
			<p className="filter__reset" onClick={onClickReset}>
				Reset
			</p>
			<p className="filter__close" onClick={toggleFilterOptions}>
				X
			</p>
		</div>
	)
}

export default FilterControls
