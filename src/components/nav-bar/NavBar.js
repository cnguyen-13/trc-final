import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import NavControl from "./nav-bar-components/NavControl"
import useNavbar from "../../hooks/useNavbar"
import useViewPortWidth from "../../hooks/useViewPortWidth"
import useNavStyles from "../../js-styles/nav"
import useTextResize from "../../hooks/useTextResize"

function NavBar({ isRecipePage }) {
	const width = useViewPortWidth()
	const [isActive, toggleIsActive] = useNavbar()
	const classes = useNavStyles()
	const isMobile = width < 768
	const title = useTextResize()

	const buttons = (
		<>
			<Link to="/" style={classes.link}>
				<Button
					variant={isRecipePage ? "contained" : "outlined"}
					startIcon={<HomeIcon />}
					style={isRecipePage ? { marginRight: "1rem" } : classes.buttonFirst}
				>
					Home
				</Button>
			</Link>
			<Link to="/favorites" style={classes.link}>
				<Button
					variant={isRecipePage ? "contained" : "outlined"}
					startIcon={<FavoriteIcon />}
					style={isRecipePage ? null : classes.button}
				>
					Favorites
				</Button>
			</Link>
		</>
	)

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
				{!isMobile ? buttons : null}
				{isMobile && isActive ? mobileMenu : null}
				<NavControl
					isMobile={isMobile}
					isActive={isActive}
					toggleIsActive={toggleIsActive}
				/>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
