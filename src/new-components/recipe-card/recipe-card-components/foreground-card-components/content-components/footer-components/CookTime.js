import React from "react"
import clock from "../../../../../../images/recipe-card/clock.svg"
import { cookTimeText } from "../../../../../../functions/cook-time-text"

function CookTime({ recipe }) {
	const { readyInMinutes } = recipe

	return (
		<div className="recipes__ready-time">
			<img className="recipes__clock-icon" src={clock} alt="Clock" />
			<p className="recipes__cook-time">{`${readyInMinutes} ${cookTimeText(
				readyInMinutes
			)}`}</p>
		</div>
	)
}

export default CookTime
