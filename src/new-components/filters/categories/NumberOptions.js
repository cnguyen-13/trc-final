import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import NumberInput from "../options/NumberInput"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"

function NumberOptions({ filterSettings, onChangeFilter }) {
	const value = filterSettings[CATEGORIES.NUMBER].value

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.NUMBER} />
			<NumberInput onChangeFilter={onChangeFilter} value={value} />
		</section>
	)
}

export default NumberOptions
