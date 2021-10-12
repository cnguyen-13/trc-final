import React from "react"
import TextSection from "./hero-components/TextSection"
import FilterOptions from "../filters/FilterOptions"
import HeroBackground from "./hero-components/HeroBackground"
import useHeroStyles from "../../js-styles/search-hero"
import { Container, Typography, TextField, Button } from "@mui/material"

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

function NewHero() {
	const classes = useHeroStyles
	return (
		<div style={classes.background}>
			<Container style={classes.container}>
				<Typography
					style={classes.title}
					variant="h1"
					component="h1"
					textAlign="center"
				>
					The Cookbook Reference
				</Typography>

				<Typography
					variant="body1"
					component="p"
					textAlign="center"
					style={classes.text}
				>
					Find new and delicious recipes to fill your desires! Search through an
					extensive list ranging many cuisines. Filter results to meet your
					nutritional needs and diets.
				</Typography>

				<Typography
					style={classes.settings}
					variant="body2"
					component="p"
					onClick={1}
				>
					Search Settings
				</Typography>
			</Container>
		</div>
	)
}

export default NewHero
