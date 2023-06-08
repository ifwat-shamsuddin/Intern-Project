import { TableFooter, TablePagination, TableRow } from "@material-ui/core"

const CustomizedTablePagination = ({
  rowsPerPageOptions = [5, 10, 15, 25],
  totalRowsCount,
  rowsPerPage,
  tablePage,
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
