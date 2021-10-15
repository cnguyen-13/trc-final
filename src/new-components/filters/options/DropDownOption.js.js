import React from "react"
import { MenuItem } from "@mui/material"

function DropDownOption({ data }) {
	return <option value={data}>{data}</option>
}

function NewDropDownOption({ data }) {
	return <MenuItem value={data}>{data}</MenuItem>
}

export default DropDownOption
