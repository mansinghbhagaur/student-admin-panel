import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid2,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle successful login (e.g., API call)
      console.log("Login Successful", formData);
      navigate("/dashboard");
      enqueueSnackbar("Login Successful", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
  };

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      bgcolor={"grey"}
      minHeight={"100vh"}
    >
      <Grid2 size={{ xs: 11, sm: 8, md: 6, lg: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
            />

            {/* Password Field */}
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              margin="normal"
            />

            {/* Login Button */}
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ paddingY: 1.5, fontSize: "1rem" }}
              >
                Login
              </Button>
            </Box>
          </form>
          {/* Optional Extra Links */}
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don't have an account? <a href="#">Register</a>
            </Typography>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Login;
