import React from "react"

function List({ type, items }) {
	return type === "ordered" ? (
		<ol className="recipe__list">{items}</ol>
	) : (
		<ul className="recipe__list">{items}</ul>
	)
}

export default List
