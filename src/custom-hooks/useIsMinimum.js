export default function useIsMinimum(id) {
	const isMinimumInput = id.substring(0, 3) === "min"
	return isMinimumInput
}
