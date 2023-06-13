import { isFinite } from "lodash"
import { useMemo, useState } from "react"

import CustomTable from "@/components/CustomTable"
import {
  StyledTableCell,
  NoValueCell,
  EditButtonCell,
} from "../../CustomTable/Cells"
import replaceIfNull from "@/utils/replaceIfNullUtils"

const CharactersTable = ({ data, onRowClick, onFetchMore, onRefetch }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [tablePage, setTablePage] = useState(0)

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

  const rows = useMemo(() => {
    return data.allPeople.edges.map((edge) => edge.node)
  }, [data])

  const pageInfo = data.allPeople.pageInfo
  const totalRowsCount = data.allPeople.totalCount

  const handleChangePage = (event, newPage) => {
    if (newPage > tablePage) {
      onFetchMore({
        variables: {
          first: rowsPerPage,
          last: null,
          beforeCursor: null,
          afterCursor: pageInfo.endCursor,
        },
      })
    } else {
      onFetchMore({
        variables: {
          first: null,
          last: rowsPerPage,
          beforeCursor: pageInfo.startCursor,
          afterCursor: null,
        },
      })
    }
    setTablePage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    onRefetch({
      first: parseInt(event.target.value),
      last: null,
      beforeCursor: null,
      afterCursor: null,
    })
    setRowsPerPage(parseInt(event.target.value))
    setTablePage(0)
  }

  const labelDisplayedRows = () => {
    return `Page ${tablePage + 1} of ${Math.ceil(totalRowsCount / rowsPerPage)}`
  }

  return (
    <CustomTable
      columns={columns}
      data={rows}
      onRowClick={onRowClick}
      CustomizedTablePaginationProps={{
        tablePage,
        rowsPerPage,
        totalRowsCount,
        handleChangePage,
        handleChangeRowsPerPage,
        labelDisplayedRows,
      }}
    />
  )
}

export default CharactersTable
