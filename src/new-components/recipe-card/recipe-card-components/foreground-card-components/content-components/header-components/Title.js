import React from "react"
import ClampLines from "react-clamp-lines"

function Title({ recipe }) {
	const { title } = recipe

	return (
		<ClampLines
			text={title}
			lines={1}
			ellipsis="..."
			className="recipes__title"
			innerElement="h3"
			buttons={false}
		/>
	)
}

export default Title
