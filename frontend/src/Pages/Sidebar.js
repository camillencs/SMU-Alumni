import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { Work, Business, BarChart, People } from "@mui/icons-material";
import "./Sidebar.css"; 

const SidebarMenu = () => {
  return (
    <Sidebar className="custom-sidebar">
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" style={{ color: "black" }}><b> Employee</b></Typography>
      </div>
      <Menu>
        <MenuItem icon={<Work />}>HR Management</MenuItem>
        <MenuItem icon={<Business />}>Job Posting</MenuItem>
        <MenuItem icon={<BarChart />}>Career Tracking</MenuItem>
        <MenuItem icon={<People />}>Carrer Tracking</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;