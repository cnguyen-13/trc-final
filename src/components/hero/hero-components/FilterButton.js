import React from "react"
import { toggleFilterOptions } from "../../../functions/filter-toggles"

function FilterButton() {
	return (
		<p className="hero__filter-btn" onClick={toggleFilterOptions}>
			Search Settings
		</p>
	)
}

export default FilterButton
