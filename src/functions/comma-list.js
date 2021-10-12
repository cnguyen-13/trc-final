export function commaList(list) {
	const joinedList = list.join(", ")
	return joinedList || "any"
}
