import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import NewDropDown from "../options/DropDown"
import useFilterOptions from "../../../hooks/useFilterOptions"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"

function TypeOptions({ filterSettings, onChangeFilter }) {
	const values = useFilterOptions(CATEGORIES.TYPES)
	const selectedValue = filterSettings[CATEGORIES.TYPES].value

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.TYPE} />
			<NewDropDown
				onChangeFilter={onChangeFilter}
				category={CATEGORIES.TYPES}
				value={selectedValue}
				values={values}
			/>
		</section>
	)
}

export default TypeOptions
