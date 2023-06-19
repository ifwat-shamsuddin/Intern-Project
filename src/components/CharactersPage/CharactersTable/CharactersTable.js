import { isFinite } from "lodash"

import CustomTable from "@/components/CustomTable"
import {
  StyledTableCell,
  NoValueCell,
  EditButtonCell,
} from "../../CustomTable/Cells"
import replaceIfNull from "@/utils/replaceIfNullUtils"

const CharactersTable = ({
  characters = [],
  tablePageInfo = {},
  totalRowsCount = 1,
  rowsPerPage,
  tablePage,
  onRowsPerPage,
  onTablePage,
  onRowClick,
  onRefetch,
}) => {
  const columns = [
    {
      header: "Name",
      field: "name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Eye Color",
      field: "eyeColor",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Height",
      field: "height",
      CellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Gender",
      field: "gender",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Birth Year",
      field: "birthYear",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={replaceIfNull(cellData)} />
      },
    },
    {
      header: "Homeworld",
      field: "homeworld.name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Species",
      field: "species.name",
      CellRenderer: ({ cellData }) => {
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: "Number of Films",
      field: "filmConnection.totalCount",
      CellRenderer: ({ cellData }) => {
        if (!isFinite(cellData)) return <NoValueCell />
        return <StyledTableCell value={cellData} />
      },
    },
    {
      header: " ",
      field: null,
      CellRenderer: () => {
        return (
          <EditButtonCell
            tooltipTitle={"Edit Character"}
            onClick={onRowClick}
          />
        )
      },
    },
  ]

  const handlePageChange = (event, newPage) => {
    if (newPage > tablePage) {
      onRefetch({
        first: rowsPerPage,
        last: null,
        beforeCursor: null,
        afterCursor: tablePageInfo.endCursor,
      })
    } else {
      onRefetch({
        first: null,
        last: rowsPerPage,
        beforeCursor: tablePageInfo.startCursor,
        afterCursor: null,
      })
    }
    onTablePage(newPage)
  }

  const handleRowsPerPageChange = (event) => {
    onRefetch({
      first: parseInt(event.target.value),
      last: null,
      beforeCursor: null,
      afterCursor: null,
    })
    onRowsPerPage(parseInt(event.target.value))
    onTablePage(0)
  }

  const labelDisplayedRows = () => {
    return `Page ${tablePage + 1} of ${Math.ceil(totalRowsCount / rowsPerPage)}`
  }

  return (
    <CustomTable
      columns={columns}
      data={characters}
      onRowClick={onRowClick}
      CustomizedTablePaginationProps={{
        tablePage,
        rowsPerPage,
        totalRowsCount,
        labelDisplayedRows,
        onPageChange: handlePageChange,
        onRowsPerPageChange: handleRowsPerPageChange,
      }}
    />
  )
}

export default CharactersTable
