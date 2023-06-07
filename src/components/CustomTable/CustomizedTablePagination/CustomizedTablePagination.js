import { TableFooter, TablePagination, TableRow } from "@material-ui/core"

const CustomizedTablePagination = ({
  rowsPerPageOptions,
  rowsCount,
  rowsPerPage,
  tablePage,
  setTablePage,
  setRowsPerPage,
}) => {
  const handleChangePage = (event, newPage) => {
    setTablePage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value))
    setTablePage(0)
  }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          count={rowsCount}
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
