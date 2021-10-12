const useHeroStyles = {
	background: {
		minHeight: 700,
		height: "85vh",
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./cook1.jpg')",
	},

	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "2.5rem",
	},

	title: {
		fontSize: "5rem",
		paddingBottom: "1rem",
		fontWeight: 100,
		fontStyle: "italic",
	},

	text: {
		width: "40%",
		margin: "0 auto",
	},

	textField: {
		border: "1px solid white",
		backgroundColor: "transparent",
		color: "white",
		width: "45%",
		borderRadius: "0.25rem",
	},

	settings: {
		cursor: "pointer",
	},
}

export default useHeroStyles
