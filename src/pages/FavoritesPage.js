import React from "react"
import Recipes from "../components/recipe-card/Recipes"
import useFavorites from "../hooks/useFavorites"
import NavBar from "../components/nav-bar/NavBar"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import Footer from "../components/footer/Footer"

function Favorites() {
	const favorites = useFavorites()

	return (
		<>
			<NavBar />
			<Hero isFavoritePage />
			<Search isFavoritePage />
			<Recipes query="Favorite" recipes={favorites} />
			<Footer />
		</>
	)
}

export default Favorites
