import { useState, useEffect } from "react"

function useViewPortWidth() {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		function onResizeHandler() {
			setWidth(window.innerWidth)
		}

		window.addEventListener("resize", onResizeHandler)

		return () => {
			window.removeEventListener("resize", onResizeHandler)
		}
	}, [])

	return width
}

export default useViewPortWidth
