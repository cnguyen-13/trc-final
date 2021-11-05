import React, { useState } from "react"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material"

import SettingsIcon from "@mui/icons-material/Settings"
import useHeroStyles from "../../../js-styles/search-hero"
import FilterOptions from "../../filters/FilterOptions"

function SettingsModalButton({ onChangeFilter, onClickReset, filterSettings }) {
	const classes = useHeroStyles
	const [isOpen, setIsOpen] = useState(false)

	function handleOpen() {
		setIsOpen(true)
	}

	function handleClose() {
		setIsOpen(false)
	}

	return (
		<>
			<Button
				style={classes.settingBtn}
				variant="contained"
				size="large"
				startIcon={<SettingsIcon />}
				onClick={handleOpen}
			>
				Settings
			</Button>
			<Dialog open={isOpen} onClose={handleClose} fullWidth>
				<DialogTitle>Search Settings</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={onClickReset}>Reset</Button>
				</DialogActions>
				<DialogContent>
					<FilterOptions
						filterSettings={filterSettings}
						onChangeFilter={onChangeFilter}
						onClickReset={onClickReset}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default SettingsModalButton
