import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import NavControl from "./nav-bar-components/NavControl"
import useNavbar from "../../custom-hooks/useNavbar"
import useViewPortWidth from "../../custom-hooks/viewport-width"
import useNavStyles from "../../js-styles/nav"

function NewNavBar() {
	const width = useViewPortWidth()
	const [isActive, toggleIsActive] = useNavbar()
	const classes = useNavStyles()
	const isMobile = width < 768

	const buttons = (
		<>
			<Link to="/" style={classes.link}>
				<Button
					variant="contained"
					startIcon={<HomeIcon />}
					style={classes.buttonFirst}
				>
					Home
				</Button>
			</Link>
			<Link to="/favorites" style={classes.link}>
				<Button
					variant="contained"
					startIcon={<FavoriteIcon />}
					style={classes.button}
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
					variant={isMobile ? "outlined" : "contained"}
					startIcon={<HomeIcon />}
					style={classes.buttonMobile}
				>
					Home
				</Button>
			</Link>
			<Link to="/favorites" style={classes.link}>
				<Button
					variant={isMobile ? "outlined" : "contained"}
					startIcon={<FavoriteIcon />}
					style={classes.buttonMobile}
				>
					Favorites
				</Button>
			</Link>
		</Container>
	)

	return (
		<AppBar style={classes.navbar} position="absolute">
			<Toolbar>
				<Typography variant="h5" component="p" style={classes.title}>
					The Cookbook Reference
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

export default NewNavBar
