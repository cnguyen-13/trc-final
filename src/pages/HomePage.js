import React from "react"
import NavBar from "../components/nav-bar/NavBar"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import Recipes from "../components/recipe-card/Recipes"
import useFetchRecipes from "../hooks/useFetchRecipes"
import useCreateLocalStorage from "../hooks/useCreateLocalStorage"
import useFilter from "../hooks/useFilter"
import useQuery from "../hooks/useQuery"
import Footer from "../components/footer/Footer"

function Home() {
	useCreateLocalStorage()
	const { query, oldQuery, onChangeQuery, resetQuery } = useQuery()
	const { filterSettings, onChangeFilter, onClickReset } = useFilter()
	const { recipes, onClickSubmit } = useFetchRecipes(
		query,
		filterSettings,
		resetQuery
	)

	return (
		<>
			<NavBar />
			<Hero
				query={query}
				onChangeQuery={onChangeQuery}
				onClickSubmit={onClickSubmit}
				onChangeFilter={onChangeFilter}
				onClickReset={onClickReset}
				filterSettings={filterSettings}
			/>
			<Search />
			{recipes.length !== 0 ? (
				<Recipes query={oldQuery} recipes={recipes} />
			) : null}
			<Footer />
		</>
	)
}

export default Home
