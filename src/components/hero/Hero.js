import React from "react"
import useHeroStyles from "../../js-styles/search-hero"
import { Container, Typography, Button, ButtonGroup } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import SettingsModalButton from "./hero-components/SettingsModalButton"

function Hero({
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
						gutterBottom
					>
						The Cookbook Reference: Your Favorites!
					</Typography>

					<Typography
						variant="body1"
						component="p"
						textAlign="center"
						style={classes.text}
					>
						Review, rediscover, and savor your favorited recipes. All of the
						recipes you favorited will be saved here. Add and remove recipes
						based on your current wants and needs.
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
					gutterBottom
				>
					The Cookbook Reference
				</Typography>

				<Typography
					variant="body1"
					component="p"
					textAlign="center"
					style={classes.text}
					gutterBottom
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
						size="large"
						style={{ backgroundColor: "#FF415B" }}
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

export default Hero
