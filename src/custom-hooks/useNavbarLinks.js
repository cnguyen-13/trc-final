import TRCLink from "../components/nav-bar/nav-bar-components/TRCLink"
import useTextResize from "./useTextResize"

export default function useNavbarLinks() {
	const mainLinkText = useTextResize()
	const mainLink = <TRCLink slug="" text={mainLinkText} key="main-link" />
	const homeLink = <TRCLink slug="" text="Home" key="home-link" />

	const favoritesLink = (
		<TRCLink slug="favorites" text="My Favorites" key="favorites-link" />
	)

	return {
		group1: [mainLink],
		group2: [homeLink, favoritesLink],
	}
}
