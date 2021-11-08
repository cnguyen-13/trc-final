import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from "@mui/material"
import GitHubLogo from "../../images/github.svg"

function Footer() {
	return (
		<AppBar
			color="primary"
			style={{
				position: "static",
				padding: "0.75rem",
			}}
		>
			<Toolbar
				style={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography variant="h6" gutterBottom>
					The Cookbook Reference
				</Typography>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "0.5rem",
					}}
				>
					<Typography variant="body1" gutterBottom>
						<Link to="/" style={{ color: "white", textDecoration: "none" }}>
							Home
						</Link>
					</Typography>
					<Typography variant="body1" gutterBottom>
						<Link
							to="/favorites"
							style={{ color: "white", textDecoration: "none" }}
						>
							Favorites
						</Link>
					</Typography>
				</div>

				<Typography variant="body1" gutterBottom>
					<Link
						to={{ pathname: "https://spoonacular.com/food-api" }}
						target="_blank"
						style={{ color: "white", textDecoration: "none" }}
					>
						Spoonacular API
					</Link>
				</Typography>

				<Link
					to={{ pathname: "https://github.com/cnguyen-13/TRC-Remake" }}
					target="_blank"
				>
					<img src={GitHubLogo} alt="github link" />
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Footer
