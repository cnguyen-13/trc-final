import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import {
	FOREGROUND_ANIMATION,
	BACKGROUND_ANIMATION,
} from "../animations/recipe-card"

export default function useRecipeCardAnimation() {
	const card = useRef(null)
	const foreground = useRef(null)
	const background = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({ paused: true, repeatDelay: 0 })
		tl.to(foreground.current, FOREGROUND_ANIMATION)
		tl.to(background.current, BACKGROUND_ANIMATION, "-=0.1")

		function play() {
			tl.play()
		}

		function reverse() {
			tl.reverse()
		}

		const { current } = card
		current.addEventListener("mouseover", play)
		current.addEventListener("mouseout", reverse)

		return () => {
			try {
				current.removeEventListener("mouseover", play)
				current.removeEventListener("mouseout", reverse)
			} catch (err) {}
		}
	}, [])

	return { card, foreground, background }
}
