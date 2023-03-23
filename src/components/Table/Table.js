import { Table, TableContainer, Paper } from "@material-ui/core"

import CustomisedTableHead from "./CustomisedTableHead"
import StyledTableRow from "./StyledTableBody"

const CharTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<CustomisedTableHead />
				<StyledTableRow />
			</Table>
		</TableContainer>
	)
}

export default CharTable
