import React from "react"
import PreText from "./text-components/PreText"
import Title from "./text-components/Title"
import Description from "./text-components/Description"

function Text({ categoryText, titleRef, descriptionRef }) {
	return (
		<div className="search__text">
			<PreText categoryText={categoryText} />
			<Title categoryText={categoryText} innerRef={titleRef} />
			<Description categoryText={categoryText} innerRef={descriptionRef} />
		</div>
	)
}

export default Text
