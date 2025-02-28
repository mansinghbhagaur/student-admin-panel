import { Grid2, Paper, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const StudentForm = ({ setOpen, formId, initialValues = null, refetch }) => {
  return (
    <>
      <form id={formId}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              name="name"
              label="Name"
              value={initialValues?.name || ""}
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              name="mobile"
              label="Mobile"
              value={initialValues?.mobile || ""}
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              name="email"
              label="Email"
              value={initialValues?.email || ""}
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              name="class"
              label="Class"
              value={initialValues?.class || ""}
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid2>
        </Grid2>
      </form>
    </>
  );
};
export default StudentForm;
