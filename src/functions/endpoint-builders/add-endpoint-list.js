export function addEndpointList({ parameter, list }) {
	if (list.length === 0) return ""
	return parameter + list.join(",")
}
