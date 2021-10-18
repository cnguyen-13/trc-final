import React from "react"
import ClampLines from "react-clamp-lines"
import useHTMLParser from "../../../../custom-hooks/useHTMLParser"

function Summary({ recipe }) {
	const { summary } = recipe
	const parsedHTMLText = useHTMLParser(summary)

	return (
		<ClampLines
			text={parsedHTMLText}
			lines={5}
			ellipsis="..."
			innerElement="p"
			buttons={false}
		/>
	)
}

export default Summary
