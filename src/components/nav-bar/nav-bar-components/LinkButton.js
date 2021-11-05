import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import useNavStyles from "../../../js-styles/nav"

function LinkButton({ link, icon, text, isFirst, isRecipePage }) {
	const classes = useNavStyles()
	let styles = classes.button

	if (isFirst) {
		styles.marginRight = "1rem"
	}

	return (
		<Link to={`/${link}`} style={classes.link}>
			<Button
				variant="contained"
				startIcon={icon}
				style={
					isRecipePage ? (isFirst ? { marginRight: "1rem" } : null) : styles
				}
			>
				{text}
			</Button>
		</Link>
	)
}

export default LinkButton
