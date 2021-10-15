import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import CheckboxOption from "../options/CheckboxOption"
import useFilterOptions from "../../../custom-hooks/useFilterOptions"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"
import { FormGroup } from "@mui/material"

function CuisineOptions({ filterSettings, onChangeFilter }) {
	const values = useFilterOptions(CATEGORIES.CUISINES)

	const checkedCuisines = filterSettings[CATEGORIES.CUISINES].list
	const cuisineOptionComponents = values.map((cuisine, idx) => {
		return (
			<CheckboxOption
				data={cuisine}
				category={CATEGORIES.CUISINES}
				onChangeFilter={onChangeFilter}
				key={`${cuisine}_${idx}`}
				checked={checkedCuisines.includes(cuisine)}
			/>
		)
	})

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.CUISINE} />
			<FormGroup>{cuisineOptionComponents}</FormGroup>
		</section>
	)
}

export default CuisineOptions
