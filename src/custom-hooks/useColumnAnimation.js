import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import {
	TITLE_ANIMATION,
	DESCRIPTION_ANIMATION,
} from "../animations/search-by-column"

export default function useColumnAnimation() {
	const column = useRef(null)
	const title = useRef(null)
	const description = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({ paused: true, repeatDelay: 0 })
		tl.to(title.current, TITLE_ANIMATION, "-=0.3")
		tl.to(description.current, DESCRIPTION_ANIMATION, "-=0.3")

		function play() {
			tl.play()
		}

		function reverse() {
			tl.reverse()
		}

		const { current } = column
		current.addEventListener("mouseover", play)
		current.addEventListener("mouseout", reverse)

		return () => {
			try {
				current.removeEventListener("mouseover", play)
				current.removeEventListener("mouseout", reverse)
			} catch (err) {}
		}
	}, [column])

	return { column, title, description }
}
