export function addEndpointValue({ parameter, value }) {
	if (value === "any") return ""
	return parameter + value
}
