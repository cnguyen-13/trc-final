import { useEffect, useRef } from "react"
import { TimelineLite } from "gsap"
import { HERO_BACKGROUND_ANIMATION } from "../animations/hero"

export default function useHeroBackgroundAnimation() {
	let background = useRef(null)

	function refBackground(el) {
		background = el
	}

	useEffect(() => {
		const tl = new TimelineLite()
		tl.from(background, HERO_BACKGROUND_ANIMATION)
	}, [])

	return { refBackground }
}
