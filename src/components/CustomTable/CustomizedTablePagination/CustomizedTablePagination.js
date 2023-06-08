import { TableFooter, TablePagination, TableRow } from "@material-ui/core"

const CustomizedTablePagination = ({
  tablePage,
  rowsPerPage,
  rowsPerPageOptions = [5, 10, 15, 25],
  totalRowsCount,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          count={totalRowsCount}
          rowsPerPage={rowsPerPage}
          page={tablePage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableRow>
    </TableFooter>
  )
}

export default CustomizedTablePagination
