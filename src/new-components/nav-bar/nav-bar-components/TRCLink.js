import React from "react"
import { Link } from "react-router-dom"

function TCRLink({ slug, text, id }) {
	return (
		<Link id={id} className="nav__link" to={`/${slug}`}>
			{text}
		</Link>
	)
}

export default TCRLink
