import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import CheckboxOption from "../options/CheckboxOption"
import useFilterOptions from "../../../hooks/useFilterOptions"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"
import { FormGroup } from "@mui/material"

function IntoleranceOptions({ filterSettings, onChangeFilter }) {
	const values = useFilterOptions(CATEGORIES.INTOLERANCES)

	const checkedIntolerances = filterSettings[CATEGORIES.INTOLERANCES].list
	const intoleranceOptionComponents = values.map((intolerance, idx) => {
		return (
			<CheckboxOption
				data={intolerance}
				category={CATEGORIES.INTOLERANCES}
				onChangeFilter={onChangeFilter}
				key={`${intolerance}_${idx}`}
				checked={checkedIntolerances.includes(intolerance)}
			/>
		)
	})

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.INTOLERANCES} />
			<FormGroup>{intoleranceOptionComponents}</FormGroup>
		</section>
	)
}

export default IntoleranceOptions
