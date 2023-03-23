import { TableCell, withStyles } from "@material-ui/core"

const NewTableCell = withStyles((theme) => ({
	root: {
		padding: "8px",
	},
	head: {
		backgroundColor: theme.table.header.bgColor,
		color: theme.table.header.textColor,
		fontWeight: theme.table.header.fontWeight,
	},
	body: {
		borderBottomColor: theme.table.row.bottomBorder,
	},
}))(TableCell)

const StyledTableCell = ({ column, value, type, children }) => {
	if (type === "head") {
		return <NewTableCell>{children}</NewTableCell>
	} else {
		switch (column) {
			case "id":
				return
			case "eyeColor":
				return (
					<NewTableCell>
						{value[0].toUpperCase() + value.substring(1)}
					</NewTableCell>
				)
			case "gender":
				return (
					<NewTableCell>
						{value === "n/a"
							? "-"
							: value[0].toUpperCase() + value.substring(1)}
					</NewTableCell>
				)
			case "birthYear":
				return <NewTableCell>{value === "unknown" ? "-" : value}</NewTableCell>
			case "filmConnection":
				return <NewTableCell>{value[0][1]}</NewTableCell>
			case "homeworld":
			case "species":
				return <NewTableCell>{value ? value[1][1] : "-"}</NewTableCell>
			default:
				return <NewTableCell>{value ? value : "-"}</NewTableCell>
		}
	}
}

export default StyledTableCell
