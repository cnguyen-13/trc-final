import React from "react"
import Title from "./header-components/Title"
import Tags from "./header-components/Tags"

function Header({ recipe }) {
	return (
		<header className="recipes__header">
			<Title recipe={recipe} />
			<Tags recipe={recipe} />
		</header>
	)
}

export default Header
