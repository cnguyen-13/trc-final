import React from "react"
import NavigationBar from "../components/nav-bar/NavigationBar"
import Recipes from "../components/recipe-card/Recipes"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import useFavorites from "../custom-hooks/useFavorites"

function Favorites() {
	const favorites = useFavorites()

	return (
		<>
			<NavigationBar />
			<Hero isFavoritePage />
			<Search isFavoritePage />
			<Recipes query="Favorite" recipes={favorites} />
		</>
	)
}

export default Favorites
