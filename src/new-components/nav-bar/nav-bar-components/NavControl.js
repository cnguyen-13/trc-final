import React from "react"
import hamburger from "../../../images/nav/hamburger.svg"
import cancel from "../../../images/nav/cancel.svg"

function NavControl({ isActive, toggleIsActive }) {
	return (
		<img
			className="nav__control"
			src={isActive ? cancel : hamburger}
			alt={isActive ? "close menu" : "hamburger menu"}
			onClick={toggleIsActive}
		/>
	)
}

export default NavControl
