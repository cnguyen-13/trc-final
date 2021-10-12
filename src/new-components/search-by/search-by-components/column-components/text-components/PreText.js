import React from "react"

function PreText({ categoryText }) {
	const { PRE_TEXT } = categoryText

	return <p className="search__pre-text">{PRE_TEXT}</p>
}

export default PreText
