import { TableFooter, TablePagination, TableRow } from "@material-ui/core"

const CustomizedTablePagination = ({
  tablePage,
  rowsPerPage,
  rowsPerPageOptions = [5, 10, 15, 25],
  totalRowsCount,
  onPageChange,
  onRowsPerPageChange,
  labelDisplayedRows,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          count={totalRowsCount}
          rowsPerPage={rowsPerPage}
          page={tablePage}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelDisplayedRows={labelDisplayedRows}
        />
      </TableRow>
    </TableFooter>
  )
}

export default CustomizedTablePagination
