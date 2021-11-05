import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Control from "./nav-bar-components/Control"
import useNavbar from "../../hooks/useNavbar"
import useViewPortWidth from "../../hooks/useViewPortWidth"
import useNavStyles from "../../js-styles/nav"
import useTextResize from "../../hooks/useTextResize"
import { NAV_LINKS } from "../../constants/nav-links"
import LinkButton from "./nav-bar-components/LinkButton"

function NavBar({ isRecipePage }) {
	const width = useViewPortWidth()
	const [isActive, toggleIsActive] = useNavbar()
	const classes = useNavStyles()
	const isMobile = width < 768
	const title = useTextResize()

	const linkButtonComponents = NAV_LINKS.map((details, idx) => {
		return (
			<LinkButton
				isFirst={idx === 0}
				key={details.LINK}
				link={details.LINK}
				icon={details.ICON}
				text={details.TEXT}
				isRecipePage={isRecipePage}
			/>
		)
	})

	const mobileMenu = (
		<Container style={classes.mobileMenu}>
			<Link to="/" style={classes.link}>
				<Button
					variant="outlined"
					startIcon={<HomeIcon />}
					style={classes.buttonMobile}
				>
					Home
				</Button>
			</Link>
			<Link to="/favorites" style={classes.link}>
				<Button
					variant="outlined"
					startIcon={<FavoriteIcon />}
					style={classes.buttonMobile}
				>
					Favorites
				</Button>
			</Link>
		</Container>
	)

	return (
		<AppBar
			style={
				isRecipePage
					? { color: "black", backgroundColor: "white", height: 75 }
					: classes.navbar
			}
			position={isRecipePage ? "fixed" : "absolute"}
		>
			<Toolbar style={classes.toolbar}>
				<Typography variant="h5" component="p" style={classes.title}>
					{title}
				</Typography>
				{!isMobile ? linkButtonComponents : null}
				{isMobile && isActive ? mobileMenu : null}
				<Control
					isMobile={isMobile}
					isActive={isActive}
					toggleIsActive={toggleIsActive}
				/>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
