import React from "react"
import TextSection from "../../hero/hero-components/TextSection"
import HeroBackground from "../../hero/hero-components/HeroBackground"
import useCommaList from "../../../custom-hooks/useCommaList"

function Hero({ recipe }) {
	const { title, dishTypes, diets, readyInMinutes } = recipe
	const dishesString = useCommaList(dishTypes)
	const dietsString = useCommaList(diets)

	return (
		<section className="hero">
			<div className="hero-content">
				<TextSection
					recipeTitle={title}
					recipeDescription={dishesString}
					recipeDiets={dietsString}
					recipeTime={readyInMinutes}
					isRecipePage
				/>
			</div>
			<HeroBackground isRecipePage />
		</section>
	)
}

export default Hero
