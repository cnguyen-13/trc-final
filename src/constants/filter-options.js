import { CATEGORIES } from "./filter-categories"
import {
	CUISINE_ARRAY,
	INTOLERANCE_ARRAY,
	TYPES_ARRAY,
	NUTRITION_ARRAY,
	DIETS_ARRAY,
} from "./filter-arrays"

//Array of FILTER object for NUTRITION OBJECT
const nutritionFilters = NUTRITION_ARRAY.map(nutrition => {
	const noSpacesName = nutrition.replaceAll(" ", "")

	return {
		name: nutrition,
		min: {
			parameter: `&min${noSpacesName}=`,
			value: "",
		},
		max: {
			parameter: `&max${noSpacesName}=`,
			value: "",
		},
	}
})

const CUISINES = {
	TITLE: "Cuisines",
	CATEGORY: CATEGORIES.CUISINES,
	PARAMETER: "&cuisine=",
	VALUES: CUISINE_ARRAY,
}

const INTOLERANCES = {
	TITLE: "Intolerances",
	CATEGORY: CATEGORIES.INTOLERANCES,
	PARAMETER: "&intolerances=",
	VALUES: INTOLERANCE_ARRAY,
}

const TYPES = {
	TITLE: "Meal Type",
	CATEGORY: CATEGORIES.TYPES,
	PARAMETER: "&type=",
	VALUES: TYPES_ARRAY,
}

const DIETS = {
	TITLE: "Diets",
	CATEGORY: CATEGORIES.DIETS,
	PARAMETER: "&diet=",
	VALUES: DIETS_ARRAY,
}

const NUTRITION = {
	TITLE: "Nutrition",
	CATEGORY: CATEGORIES.NUTRITION,
	VALUES: nutritionFilters,
}

const NUMBER = {
	TITLE: "Number",
	CATEGORY: CATEGORIES.NUMBER,
	PARAMETER: "&number=",
	VALUES: 8,
}

export const DEFAULT_SETTINGS = {
	[CATEGORIES.CUISINES]: {
		parameter: CUISINES.PARAMETER,
		list: [],
	},
	[CATEGORIES.INTOLERANCES]: {
		parameter: INTOLERANCES.PARAMETER,
		list: [],
	},
	[CATEGORIES.TYPES]: {
		parameter: TYPES.PARAMETER,
		value: "any",
	},
	[CATEGORIES.DIETS]: {
		parameter: DIETS.PARAMETER,
		value: "any",
	},
	[CATEGORIES.NUTRITION]: {
		list: nutritionFilters,
	},
	[CATEGORIES.NUMBER]: {
		parameter: NUMBER.PARAMETER,
		value: "8",
	},
}

export const DATA = {
	[CATEGORIES.CUISINES]: CUISINES,
	[CATEGORIES.INTOLERANCES]: INTOLERANCES,
	[CATEGORIES.TYPES]: TYPES,
	[CATEGORIES.DIETS]: DIETS,
	[CATEGORIES.NUTRITION]: NUTRITION,
	[CATEGORIES.NUMBER]: NUMBER,
}
