import { useState, useEffect } from "react"

const SMALL_SIZE = 450
const TITLE = {
	ABBREVIATED: "TCR",
	FULL: "The Cookbook Reference",
}

export default function useTextResize() {
	const [isSmall, setIsSmall] = useState(window.innerWidth < SMALL_SIZE)

	function adjustText() {
		window.innerWidth < SMALL_SIZE ? setIsSmall(true) : setIsSmall(false)
	}

	useEffect(() => {
		window.addEventListener("resize", adjustText)
		return () => {
			window.removeEventListener("resize", adjustText)
		}
	}, [])

	return isSmall ? TITLE.ABBREVIATED : TITLE.FULL
}
