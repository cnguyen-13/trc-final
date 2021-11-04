import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import RecipePage from "./pages/RecipePage"
import useScrollToTop from "./hooks/useScrollToTop"

function App() {
	useScrollToTop()

	return (
		<div className="app">
			<Switch>
				<Route path="/recipe/:recipeName" component={RecipePage}></Route>
				<Route path="/favorites" exact component={FavoritesPage}></Route>
				<Route path="/" exact component={HomePage}></Route>
			</Switch>
		</div>
	)
}

export default App
