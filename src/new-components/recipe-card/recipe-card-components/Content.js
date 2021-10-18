import React from "react"
import Title from "./content-components/Title"
import Tags from "./content-components/Tags"
import Summary from "./content-components/Summary"
import { CardContent } from "@mui/material"

function Content({ recipe }) {
	return (
		<CardContent>
			<Title recipe={recipe} />
			<Tags recipe={recipe} />
			<Summary recipe={recipe} />
		</CardContent>
	)
}

export default Content
