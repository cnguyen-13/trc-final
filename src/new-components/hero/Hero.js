import React from "react"
import TextSection from "./hero-components/TextSection"
import FilterOptions from "../filters/FilterOptions"
import HeroBackground from "./hero-components/HeroBackground"
import useHeroStyles from "../../js-styles/search-hero"
import { Container, Typography, Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import SettingsModalButton from "./hero-components/SettingsModalButton"

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

function NewHero({
	query,
	onChangeQuery,
	onClickSubmit,
	onChangeFilter,
	onClickReset,
	nutritionalValues,
	filterSettings,
	isFavoritePage,
}) {
	const classes = useHeroStyles
	if (isFavoritePage) {
		return (
			<div style={classes.favoritesBackground}>
				<Container style={classes.container}>
					<Typography
						style={classes.title}
						variant="h2"
						component="h1"
						textAlign="center"
					>
						The Cookbook Reference: Your Favorites!
					</Typography>

					<Typography
						variant="body1"
						component="p"
						textAlign="center"
						style={classes.text}
					>
						Review, rediscover, and savor your favorited recipes. All of
						favorited recipes will be collected here.
					</Typography>
					<Typography
						variant="h4"
						component="p"
						textAlign="center"
						style={classes.text}
					>
						ENJOY!
					</Typography>
				</Container>
			</div>
		)
	}
	return (
		<div style={classes.background}>
			<Container style={classes.container}>
				<Typography
					style={classes.title}
					variant="h2"
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

				<input
					type="text"
					style={classes.input}
					onChange={onChangeQuery}
					value={query}
				/>

				<div>
					<SettingsModalButton
						onChangeFilter={onChangeFilter}
						onClickReset={onClickReset}
						nutritionalValues={nutritionalValues}
						filterSettings={filterSettings}
					/>
					<Button
						variant="contained"
						startIcon={<SearchIcon />}
						onClick={onClickSubmit}
					>
						Search
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default NewHero
