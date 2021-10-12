export function toggleFilterOptions() {
	const options = document.querySelector(".filter")
	const mask = document.querySelector(".hero__mask")

	options.classList.toggle("filter--active")
	mask.classList.toggle("hero__mask--active")
}
