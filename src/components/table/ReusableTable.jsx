import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
} from "@mui/material";

const ReusableTable = ({
  columns = [],
  rows = [],
  actions = [],
  page = 0,
  rowsPerPage = 5,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  // Calculate the rows to display for the current page
  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 510 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align || "left"}
                  sx={
                    column.headerStyle || {
                      fontWeight: "bold",
                      fontSize: "1.0rem",
                      padding: "12px",
                      background: "rgb(25 118 210)",
                      color: "white",
                    }
                  }
                >
                  {column.headerName}
                </TableCell>
              ))}
              {actions.length > 0 && (
                <TableCell
                  align="center"
                  sx={
                    actions.headerStyle || {
                      fontWeight: "bold",
                      fontSize: "1.0rem",
                      padding: "12px",
                      background: "rgb(25 118 210)",
                      color: "white",
                    }
                  }
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {displayedRows.map((row, index) => (
              <TableRow key={row.id || index}>
                {columns.map((column) => (
                  <TableCell key={column.field} align={column.align || "left"}>
                    {row[column.field]}
                  </TableCell>
                ))}
                {/* Render Actions */}
                {actions.length > 0 && (
                  <TableCell align="center">
                    {actions.map((action, idx) => (
                      <IconButton
                        key={idx}
                        color={action.color || "primary"}
                        onClick={() => action.onClick(row)}
                      >
                        {action.icon}
                      </IconButton>
                    ))}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        component="div"
        count={rows.length} // Total number of rows
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 20, 50]} // Options for rows per page
      />
    </Paper>
  );
};

export default ReusableTable;
