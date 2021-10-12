import { useState } from "react"
import { DEFAULT_SETTINGS } from "../constants/filter-options"
import { changeSettings } from "../functions/change-settings"

export default function useFilter() {
	const [filterSettings, setFilterSettings] = useState(DEFAULT_SETTINGS)

	function onChangeFilter(e) {
		const newSettings = changeSettings(e, filterSettings)
		setFilterSettings(newSettings)
	}

	function onClickReset() {
		setFilterSettings(DEFAULT_SETTINGS)
	}

	return { filterSettings, onChangeFilter, onClickReset }
}
