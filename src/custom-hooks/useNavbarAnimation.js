import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { NAV_ANIMATION } from "../animations/nav"

export default function useNavbarAnimation() {
	const nav = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({ repeatDelay: 0 })
		tl.to(nav.current, NAV_ANIMATION)

		function toggleNavHeight() {
			const distanceFromTop = window.scrollY
			distanceFromTop < 10 ? tl.play() : tl.reverse()
		}

		function toggleMobileLinksHeight() {
			const navMobileLinks = document.querySelector(".nav__links--mobile")
			const distanceFromTop = window.scrollY
			navMobileLinks.style.top = distanceFromTop < 10 ? "60px" : "50px"
		}

		function toggleNavHeights() {
			toggleNavHeight()
			toggleMobileLinksHeight()
		}

		document.addEventListener("scroll", toggleNavHeights)

		return () => {
			try {
				document.removeEventListener("scroll", toggleNavHeights)
			} catch (err) {}
		}
	}, [])

	return { nav }
}
