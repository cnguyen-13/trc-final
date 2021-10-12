import React from "react"
import Search from "./Search"
import { commaList } from "../../../functions/comma-list"
import {
	TITLE,
	DESCRIPTION,
	FAVORITE_TITLE,
	FAVORITE_DESCRIPTION,
} from "../../../constants/hero-text"
import useTextSectionAnimation from "../../../custom-hooks/useTextSectionAnimation"

function TextSection({
	query,
	onChangeQuery,
	onClickSubmit,
	isFavoritePage,
	isRecipePage,
	recipe,
}) {
	const { first, second, third } = useTextSectionAnimation()

	if (isFavoritePage) {
		return (
			<section className="hero__text">
				<h1 ref={first} className="hero__title">
					{FAVORITE_TITLE}
				</h1>
				<p ref={second} className="hero__description">
					{FAVORITE_DESCRIPTION}
				</p>
				<p ref={third} className="hero__extra">
					Enjoy!
				</p>
			</section>
		)
	}

	if (isRecipePage) {
		const { title, diets, dishTypes, readyInMinutes } = recipe

		return (
			<section className="hero__text">
				<h1 ref={first} className="hero__title">
					{title}
				</h1>
				<p ref={second} className="hero__tags">
					{commaList(diets)} <br />
					{commaList(dishTypes)}
				</p>
				<p
					ref={third}
					className="hero__cook-time"
				>{`${readyInMinutes} mins`}</p>
			</section>
		)
	}

	return (
		<section className="hero__text">
			<h1 ref={first} className="hero__title">
				{TITLE}
			</h1>
			<p ref={second} className="hero__description">
				{DESCRIPTION}
			</p>
			<Search
				query={query}
				onChangeQuery={onChangeQuery}
				onClickSubmit={onClickSubmit}
				innerRef={third}
			/>
		</section>
	)
}

export default TextSection
