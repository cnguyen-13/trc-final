import React from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import useNavStyles from "../../../js-styles/nav"

function NavControl({ isMobile, isActive, toggleIsActive }) {
	const classes = useNavStyles

	return isMobile ? (
		<div onClick={toggleIsActive}>
			{isActive ? (
				<CloseIcon styles={classes.control} />
			) : (
				<MenuIcon styles={classes.control} />
			)}
		</div>
	) : null
}

export default NavControl
