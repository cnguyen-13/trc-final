export default function useMinMax(data) {
	const { name, min, max } = data
	const minId = `min${name}`
	const maxId = `max${name}`
	const minValue = min.value
	const maxValue = max.value

	return [name, minId, minValue, maxId, maxValue]
}
