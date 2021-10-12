import React from "react"

function LinkGroup({ childrenLinks, isMobile, isActive }) {
	const class1 = isMobile ? " nav__links--mobile" : ""
	const class2 = isActive ? " nav__links--active" : ""

	return <div className={`nav__links${class1}${class2}`}>{childrenLinks}</div>
}

export default LinkGroup
