import { styled } from "@mui/material/styles";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import React from "react";

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

const Dashboard = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Item>
            <Typography variant="h5" component="div">
              10
            </Typography>
            <Typography variant="h6" component="div">
              Total Users
            </Typography>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Item>
            <Typography variant="h5" component="div">
              5
            </Typography>
            <Typography variant="h6" component="div">
              Delete Users
            </Typography>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Item>
            <Typography variant="h5" component="div">
              7
            </Typography>
            <Typography variant="h6" component="div">
              Active Users
            </Typography>
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <Item>
            <Typography variant="h5" component="div">
              3
            </Typography>
            <Typography variant="h6" component="div">
              Inactive Users
            </Typography>
          </Item>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Dashboard;
