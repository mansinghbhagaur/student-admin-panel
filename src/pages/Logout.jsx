import { Login, LogoutOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement logout functionality here
    navigate("/");
  };
  return (
    <div>
      <Button
        variant="text"
        color="secondary"
        size="large"
        onClick={handleLogout}
      >
        <LogoutOutlined /> Logout
      </Button>
    </div>
  );
};

export default Logout;
