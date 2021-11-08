import React from "react"
import useLocalStorage from "../../../hooks/useLocalStorage"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

function Heart({ recipe }) {
	const [isFavorited, onClickHeart] = useLocalStorage(recipe)
	const styles = {
		position: "absolute",
		top: "1rem",
		right: "1rem",
		color: isFavorited ? "#D82315" : null,
	}

	return isFavorited ? (
		<FavoriteIcon style={styles} onClick={onClickHeart} />
	) : (
		<FavoriteBorderIcon style={styles} onClick={onClickHeart} />
	)
}

export default Heart
