import { TableBody, TableRow, makeStyles } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

import data from "public/data.json"

const useStyles = makeStyles((theme) => ({
	root: {
		"&:nth-of-type(even)": {
			backgroundColor: theme.table.row.primaryColor,
		},
		"&$hover:hover": {
			backgroundColor: theme.table.row.hoverBgColor,
			cursor: "pointer",
		},
	},

	hover: {},
}))

const StyledTableRow = () => {
	const classes = useStyles()

	return (
		<TableBody>
			{data.map((row) => (
				<TableRow
					hover
					key={row.id}
					classes={{ root: classes.root, hover: classes.hover }}
					onClick={() => alert("You have clicked row " + row.name)}
				>
					{Object.entries(row).map((cell) => {
						let value = cell[1]
						if (typeof value === "object" && value !== null) {
							value = Object.entries(value)
						}
						return (
							<StyledTableCell
								column={cell[0]}
								value={value}
								type="body"
							/>
						)
					})}
				</TableRow>
			))}
		</TableBody>
	)
}

export default StyledTableRow
