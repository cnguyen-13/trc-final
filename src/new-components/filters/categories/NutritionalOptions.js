import React from "react"
import { CATEGORIES } from "../../../constants/filter-categories"
import MinMaxOption from "../options/MinMaxOption"
import FilterSectionTitle from "./category-components/FilterSectionTitle"
import { FILTER_SECTION_TITLES } from "../../../constants/filter-section-titles"

function NutritionalOptions({ filterSettings, onChangeFilter }) {
	const { nutrition } = filterSettings
	const nutritions = nutrition.list
	const minMaxOptions = nutritions.map((nutrition, idx) => {
		return (
			<MinMaxOption
				data={nutrition}
				category={CATEGORIES.NUTRITION}
				onChangeFilter={onChangeFilter}
				idx={idx}
				key={`${nutrition}_${idx}`}
			/>
		)
	})

	return (
		<section className="filter__section">
			<FilterSectionTitle title={FILTER_SECTION_TITLES.NUTRITIONAL} />
			<div className="filter__options">{minMaxOptions}</div>
		</section>
	)
}

export default NutritionalOptions
