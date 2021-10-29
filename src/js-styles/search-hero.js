const useHeroStyles = {
	favoritesBackground: {
		minHeight: "85vh",
		// height: "85vh",
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./cook1.jpg')",
	},
	background: {
		minHeight: "85vh",
		// height: "85vh",
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./cook.jpg')",
	},

	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "2.5rem",
	},

	title: {
		paddingBottom: "1rem",
		fontWeight: 100,
		fontStyle: "italic",
	},

	text: {
		width: "60%",
		margin: "0 auto",
	},

	input: {
		border: "1px solid white",
		backgroundColor: "transparent",
		color: "white",
		width: "45%",
		borderRadius: "0.25rem",
		padding: "0.75rem 1.25rem",
	},

	settingBtn: {
		color: "white",
		borderColor: "white",
		marginRight: "0.5rem",
	},
}

export default useHeroStyles
