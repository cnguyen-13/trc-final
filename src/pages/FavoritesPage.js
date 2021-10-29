import React from "react"
import NavigationBar from "../components/nav-bar/NavigationBar"
import Recipes from "../new-components/recipe-card/Recipes"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import useFavorites from "../custom-hooks/useFavorites"
import NewNavBar from "../new-components/nav-bar/NavigationBar"
import NewHero from "../new-components/hero/Hero"
import NewSearch from "../new-components/search-by/Search"
import Footer from "../new-components/footer/Footer"

function Favorites() {
	const favorites = useFavorites()

	return (
		<>
			<NewNavBar />
			<NewHero isFavoritePage />
			<NewSearch isFavoritePage />
			<Recipes query="Favorite" recipes={favorites} />
			<Footer />
		</>
	)
}

export default Favorites
