import React from "react"

function Description({ categoryText, innerRef }) {
	const { TEXT } = categoryText

	return (
		<p className="search__description" ref={innerRef}>
			{TEXT}
		</p>
	)
}

export default Description
