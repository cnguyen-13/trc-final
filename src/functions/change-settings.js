import { CATEGORIES } from "../constants/filter-categories"
import _ from "lodash"

function adjustList(checked, settings, value) {
	const { list } = settings
	checked ? list.push(value) : list.splice(list.indexOf(value), 1)
}

export function changeSettings(e, filterSettings) {
	const newSettings = _.cloneDeep(filterSettings)
	const { value, checked, dataset } = e.target
	const cat = dataset.category
	const data = newSettings[cat]

	if (cat === CATEGORIES.CUISINES || cat === CATEGORIES.INTOLERANCES) {
		adjustList(checked, data, value)
	} else if (
		cat === CATEGORIES.TYPES ||
		cat === CATEGORIES.DIETS ||
		cat === CATEGORIES.NUMBER
	) {
		data.value = value
	} else {
		const { idx, minOrMax } = dataset
		data.list[idx][minOrMax].value = value
	}

	return newSettings
}
