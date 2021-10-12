import React from "react"
import useHeroBackgroundAnimation from "../../../custom-hooks/useHeroBackgroundAnimation"

function HeroBackground() {
	const { refBackground } = useHeroBackgroundAnimation()

	return (
		<div className="hero__background" ref={refBackground}>
			<div className="hero__mask"></div>
		</div>
	)
}

export default HeroBackground
