import React from "react"
import Text from "./search-by-components/column-components/Text"
import useColumnAnimation from "../../custom-hooks/useColumnAnimation"

function Column({ categoryText, background }) {
	const { column, title, description } = useColumnAnimation()

	return (
		<section ref={column} className={`search__column ${background}`}>
			<Text
				categoryText={categoryText}
				titleRef={title}
				descriptionRef={description}
			/>
		</section>
	)
}

export default Column
