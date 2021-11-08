const useNavStyles = () => ({
	navbar: {
		backgroundColor: "transparent",
		color: "white",
		boxShadow: "none",
		height: 75,
	},

	toolbar: {
		padding: "2rem 2rem",
	},

	title: {
		flexGrow: 1,
	},

	link: {
		textDecoration: "none",
	},

	button: {
		color: "white",
	},

	buttonMobile: {
		borderColor: "#210E0D",
		color: "#210E0D",
		marginRight: "0rem",
	},

	mobileMenu: {
		width: "100%",
		height: "100vh",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		gap: "1rem",
		top: 57,
		left: 0,
	},

	control: {
		cursor: "pointer",
	},
})

export default useNavStyles
