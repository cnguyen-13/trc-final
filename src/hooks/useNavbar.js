import { useState } from "react"

export default function useNavbar() {
	const [isActive, setIsActive] = useState(false)

	function toggleIsActive() {
		setIsActive(!isActive)
	}

	return [isActive, toggleIsActive]
}
