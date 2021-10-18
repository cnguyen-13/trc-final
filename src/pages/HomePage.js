import React from "react"
import NewNavBar from "../new-components/nav-bar/NavigationBar"
import NewHero from "../new-components/hero/Hero"
import NewSearch from "../new-components/search-by/Search"
import NewRecipes from "../new-components/recipe-card/Recipes"
import useFetchRecipes from "../custom-hooks/useFetchRecipes"
import useCreateLocalStorage from "../custom-hooks/useCreateLocalStorage"
import useFilter from "../custom-hooks/useFilter"
import useQuery from "../custom-hooks/useQuery"
import Footer from "../new-components/footer/Footer"

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
			<NewSearch />
			{recipes.length !== 0 ? (
				<NewRecipes query={oldQuery} recipes={recipes} />
			) : null}
			<Footer />
		</>
	)
}

export default Home
