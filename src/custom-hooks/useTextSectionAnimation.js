import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { HERO_TEXT_ANIMATION } from "../animations/hero"

export default function useTextSectionAnimation() {
	const first = useRef(null)
	const second = useRef(null)
	const third = useRef(null)

	useEffect(() => {
		try {
			const tl = gsap.timeline()
			tl.staggerFrom(
				[first.current, second.current, third.current],
				0.5,
				HERO_TEXT_ANIMATION,
				0.6
			)
		} catch (err) {}
	}, [])

	return { first, second, third }
}
