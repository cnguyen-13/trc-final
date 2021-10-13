import React, { useState } from "react"
import { Modal, Typography, Box, Button } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import SettingsIcon from "@mui/icons-material/Settings"
import useHeroStyles from "../../../js-styles/search-hero"
import FilterOptions from "../../filters/FilterOptions"

function SettingsModalButton({
	onChangeFilter,
	onClickReset,
	nutritionalValues,
	filterSettings,
}) {
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
				variant="outlined"
				placeholder="Find something new and delicious"
				startIcon={<SettingsIcon />}
				onClick={handleOpen}
			>
				Settings
			</Button>
			<Dialog open={isOpen} onClose={handleClose}>
				<DialogTitle>Search Settings</DialogTitle>
				<DialogActions>
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
