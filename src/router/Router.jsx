import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PublicRoutes from "./PublicRoutes";
import MainLayout from "../components/Drawer";
import Student from "../pages/Student";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        {/* Protected routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
