import React, { useState } from "react";
import ReusableTable from "../components/table/ReusableTable"; // import the reusable table component
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicDialog from "../components/BasicDialog";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import StudentForm from "../components/form/StudentForm";

const Student = () => {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState({});

  const [selectedRow, setSelectedRow] = useState();

  // Define columns (headers) of the table
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "mobile", headerName: "Mobile" },
    { field: "email", headerName: "Email" },
    { field: "class", headerName: "Class" },
    // { field: "email", headerName: "Email" },
  ];

  // Define rows (data) of the table
  const rows = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      class: "Class 10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "9876543210",
      class: "Mca",
    },
    {
      id: 3,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 4,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 5,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 6,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 7,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 8,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 9,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 10,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
    {
      id: 11,
      name: "Tom Jones",
      email: "tom.jones@example.com",
      mobile: "5555555555",
      class: "Bca",
    },
  ];

  // Define actions (buttons) for each row
  const actions = [
    {
      icon: <EditIcon />, // Icon for edit
      color: "primary",
      onClick: (row) => {
        setSelectedRow(row);
        setOpen(true);
      }, // Ensure this is a function
    },
    {
      icon: <DeleteIcon />,
      color: "error",
      onClick: (row) => alert(`Deleting ${row.name}`), // Ensure this is a function
    },
  ];

  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Function to handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Function to handle change in rows per page
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when rows per page changes
  };

  console.log(filters);

  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 3, sm: 2, md: 1, lg: 0.7 }}>
          <Button
            mt={5}
            variant="contained"
            size="medium"
            onClick={() => {
              setOpen(true);
              setSelectedRow(null);
            }}
          >
            Add
          </Button>
        </Grid2>

        <Grid2 size={{ xs: 9, sm: 5, md: 4, lg: 3 }}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            onChange={(e) => setFilters(e.target.value)}
            size="small"
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 5, md: 4, lg: 3 }}>
          <TextField
            label="Mobile"
            name="mobile"
            fullWidth
            onChange={(e) => setFilters(e.target.value)}
            size="small"
            sx={{ mb: 2 }}
          />
        </Grid2>
      </Grid2>

      {open && (
        <BasicDialog
          title={selectedRow ? "Updated Student" : "Add Student"}
          width={"md"}
          formId={"student"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <StudentForm
            setOpen={setOpen}
            formId={"student"}
            initialValues={selectedRow}
          />
        </BasicDialog>
      )}
      <Box sx={{ width: "100%", height: "340px" }}>
        <ReusableTable
          columns={columns} // pass columns
          rows={rows} // pass rows
          actions={actions} // pass actions
          page={page} // pass page state
          rowsPerPage={rowsPerPage} // pass rows per page state
          handlePageChange={handlePageChange} // pass page change handler
          handleRowsPerPageChange={handleRowsPerPageChange} // pass rows per page change handler
        />
      </Box>
    </div>
  );
};

export default Student;
