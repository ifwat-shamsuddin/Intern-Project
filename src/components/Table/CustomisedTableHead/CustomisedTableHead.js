import { TableHead, TableRow } from "@material-ui/core"

import StyledTableCell from "../StyledTableCell"

import columnsName from "@/enums/columnsName"

const CustomisedTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				{columnsName.map((column) => (
					<StyledTableCell type={"head"}>{column}</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default CustomisedTableHead
