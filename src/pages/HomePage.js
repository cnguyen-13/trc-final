import React from "react"
import NewNavBar from "../new-components/nav-bar/NavigationBar"
import NewHero from "../new-components/hero/Hero"
import Hero from "../components/hero/Hero"
import Search from "../components/search-by/Search"
import Recipes from "../components/recipe-card/Recipes"
import useFetchRecipes from "../custom-hooks/useFetchRecipes"
import useCreateLocalStorage from "../custom-hooks/useCreateLocalStorage"
import useFilter from "../custom-hooks/useFilter"
import useQuery from "../custom-hooks/useQuery"

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
			<NewNavBar />
			<NewHero
				query={query}
				onChangeQuery={onChangeQuery}
				onClickSubmit={onClickSubmit}
				onChangeFilter={onChangeFilter}
				onClickReset={onClickReset}
				filterSettings={filterSettings}
			/>
			{/* <Search />
			{recipes.length !== 0 ? (
				<Recipes query={oldQuery} recipes={recipes} />
			) : null} */}
		</>
	)
}

export default Home
