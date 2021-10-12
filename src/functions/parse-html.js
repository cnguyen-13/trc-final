const HTML_PATTERN = /(<([^>]+)>)/gi

export function parseHTMLElements(summary) {
	return summary.replace(HTML_PATTERN, "")
}
