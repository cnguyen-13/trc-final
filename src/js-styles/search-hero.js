const useHeroStyles = {
	favoritesBackground: {
		minHeight: "100vh",
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
		backgroundImage:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./cook5.jpg')",
	},
	background: {
		minHeight: "100vh",
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundImage:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./cook2.jpg')",
	},

	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem",
	},

	title: {
		fontWeight: 100,
		fontStyle: "italic",
	},

	text: {
		width: "60%",
		margin: "0 auto",
	},

	input: {
		border: "1px solid white",
		textAlign: "center",
		backgroundColor: "transparent",
		color: "white",
		width: "45%",
		borderRadius: "0.3rem",
		padding: "0.75rem 1.25rem",
	},

	settingBtn: {
		color: "white",
		borderColor: "white",
		marginRight: "0.5rem",
	},
}

export default useHeroStyles
