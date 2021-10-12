import React from "react"

function Title({ categoryText, innerRef }) {
	const { TITLE } = categoryText

	return (
		<h2 className="search__title" ref={innerRef}>
			{TITLE}
		</h2>
	)
}

export default Title
