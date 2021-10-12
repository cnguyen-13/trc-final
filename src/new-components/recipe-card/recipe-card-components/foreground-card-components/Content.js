import React from "react"
import Header from "./content-components/Header"
import Divider from "./content-components/Divider"
import Summary from "./content-components/Summary"
import Footer from "./content-components/Footer"

function Content({ recipe }) {
	return (
		<div className="recipes__text">
			<Header recipe={recipe} />
			<Divider />
			<Summary recipe={recipe} />
			<Footer recipe={recipe} />
		</div>
	)
}

export default Content
