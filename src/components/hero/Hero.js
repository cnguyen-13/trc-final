import React from "react"
import TextSection from "./hero-components/TextSection"
import FilterOptions from "../filters/FilterOptions"
import HeroBackground from "./hero-components/HeroBackground"

function Hero({
	query,
	onChangeQuery,
	onClickSubmit,
	onChangeFilter,
	onClickReset,
	isFavoritePage,
	isRecipePage,
	nutritionalValues,
	filterSettings,
	recipe,
}) {
	return (
		<section
			className={`hero${isFavoritePage ? " hero--favorite" : ""}${
				isRecipePage ? " hero--recipe" : ""
			}`}
		>
			<div className="hero__content">
				<TextSection
					query={query}
					onChangeQuery={onChangeQuery}
					onClickSubmit={onClickSubmit}
					recipe={recipe}
					isFavoritePage={isFavoritePage}
					isRecipePage={isRecipePage}
				/>
			</div>
			<HeroBackground />
			{isFavoritePage || isRecipePage ? null : (
				<FilterOptions
					onChangeFilter={onChangeFilter}
					nutritionalValues={nutritionalValues}
					onClickReset={onClickReset}
					filterSettings={filterSettings}
				/>
			)}
		</section>
	)
}

export default Hero
