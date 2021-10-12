import React from "react"
import LinkGroup from "./nav-bar-components/LinkGroup"
import NavControl from "./nav-bar-components/NavControl"
import useNavbarLinks from "../../custom-hooks/useNavbarLinks"
import useNavbar from "../../custom-hooks/useNavbar"
import useNavbarAnimation from "../../custom-hooks/useNavbarAnimation"

function NavigationBar() {
	const { group1, group2 } = useNavbarLinks()
	const [isActive, toggleIsActive] = useNavbar()
	const { nav } = useNavbarAnimation()

	return (
		<nav className="nav" ref={nav}>
			<div className="nav__content">
				<LinkGroup childrenLinks={group1} />
				<LinkGroup childrenLinks={group2} isMobile isActive={isActive} />
				<NavControl isActive={isActive} toggleIsActive={toggleIsActive} />
			</div>
		</nav>
	)
}

export default NavigationBar
