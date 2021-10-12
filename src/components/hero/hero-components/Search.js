import React from "react"
import FilterButton from "./FilterButton"
import { INPUT_PLACEHOLDER, SUBMIT_TEXT } from "../../../constants/hero-text"

function Search({ query, onChangeQuery, onClickSubmit, innerRef }) {
	return (
		<div className="hero__search" ref={innerRef}>
			<input
				className="hero__input"
				type="text"
				placeholder={INPUT_PLACEHOLDER}
				onChange={onChangeQuery}
				value={query}
			/>
			<button className="hero__submit" onClick={onClickSubmit}>
				{SUBMIT_TEXT}
			</button>
			<FilterButton />
		</div>
	)
}

export default Search
