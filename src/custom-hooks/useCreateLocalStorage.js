import { useEffect } from "react"
import { createLocalStorage } from "../functions/create-local-storage"

export default function useCreateLocalStorage() {
	useEffect(() => {
		createLocalStorage()
	}, [])
}
