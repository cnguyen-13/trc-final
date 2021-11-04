import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from "@mui/material"

function Footer() {
	return (
		<AppBar
			style={{
				position: "static",
				backgroundColor: "rgba(0, 0, 0)",
				padding: "1rem",
			}}
		>
			<Toolbar
				style={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography variant="h5" gutterBottom>
					<Link
						to={{ pathname: "https://spoonacular.com/food-api" }}
						target="_blank"
						style={{ color: "white", textDecoration: "none" }}
					>
						Spoonacular API
					</Link>
				</Typography>
				<Typography variant="h5" gutterBottom>
					<Link
						to={{ pathname: "https://github.com/cnguyen-13/TRC-Remake" }}
						target="_blank"
						style={{ color: "white", textDecoration: "none" }}
					>
						GitHub
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Footer
