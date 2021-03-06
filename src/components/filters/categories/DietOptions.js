import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import useFilterOptions from "../../../hooks/useFilterOptions"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"
import NewDropDown from "../options/DropDown"

function DietOptions({ filterSettings, onChangeFilter }) {
	const values = useFilterOptions(CATEGORIES.DIETS)
	const selectedValue = filterSettings[CATEGORIES.DIETS].value

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.DIET} />
			<NewDropDown
				onChangeFilter={onChangeFilter}
				category={CATEGORIES.DIETS}
				value={selectedValue}
				values={values}
			/>
		</section>
	)
}

export default DietOptions
