import { useState } from "react"

export default function useQuery() {
	const [query, setQuery] = useState("")
	const [oldQuery, setOldQuery] = useState("")

	function onChangeQuery(e) {
		const { value } = e.target
		setOldQuery(value)
		setQuery(value)
	}

	function resetQuery() {
		setQuery("")
	}

	return { query, oldQuery, onChangeQuery, resetQuery }
}
