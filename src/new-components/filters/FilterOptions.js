import React from "react"
import FilterHeader from "./FilterHeader"
import CuisineOptions from "./categories/CuisineOptions"
import IntoleranceOptions from "./categories/IntoleranceOptions"
import NumberOptions from "./categories/NumberOptions"
import TypeOptions from "./categories/TypeOptions"
import DietOptions from "./categories/DietOptions"
import NutritionalOptions from "./categories/NutritionalOptions"

function FilterOptions({ filterSettings, onChangeFilter, onClickReset }) {
	return (
		<section className="filter">
			<FilterHeader onClickReset={onClickReset} />
			<div className="filter__settings">
				<CuisineOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
				<IntoleranceOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
				<NumberOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
				<TypeOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
				<DietOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
				<NutritionalOptions
					onChangeFilter={onChangeFilter}
					filterSettings={filterSettings}
				/>
			</div>
		</section>
	)
}

export default FilterOptions
