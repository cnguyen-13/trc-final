import { DATA } from "../constants/filter-options"

export default function useFilterOptions(category) {
	return DATA[category].VALUES
}
