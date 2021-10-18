import React from "react"
import useLocalStorage from "../../../custom-hooks/useLocalStorage"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

function Heart({ recipe }) {
	const [isFavorited, onClickHeart] = useLocalStorage(recipe)

	return isFavorited ? (
		<FavoriteIcon
			style={{
				color: "red",
				position: "absolute",
				top: "1rem",
				right: "1rem",
			}}
			onClick={onClickHeart}
		/>
	) : (
		<FavoriteBorderIcon
			style={{
				position: "absolute",
				top: "1rem",
				right: "1rem",
			}}
			onClick={onClickHeart}
		/>
	)
}

export default Heart
