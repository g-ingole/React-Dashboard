// import React, { useContext, useState } from "react";
// import { Box, IconButton, useTheme } from "@mui/material";
// import { ColorModeContext, tokens } from "../../theme";
// import { InputBase } from "@mui/material";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// const Topbar = ({ onSearch }) => {
//  const theme = useTheme();
//  const colors = tokens(theme.palette.mode);
//  const colorMode = useContext(ColorModeContext);
//  const handleSearchChange = (event) => {
//    const query = event.target.value;
//    onSearch(query);
//  };
//  return (
// <Box display="flex" justifyContent="space-between" p={2}>
//      {/* SEARCH BOX */}
// <Box
//        display="flex"
//        backgroundColor={colors.primary[400]}
//        borderRadius="3px"
// >
// <InputBase
//          sx={{ ml: 2, flex: 1 }}
//          placeholder="Search"
//          onChange={handleSearchChange}
//        />
// <IconButton type="button" sx={{ p: 1 }}>
// <SearchIcon />
// </IconButton>
// </Box>
//      {/* ICON */}
// <Box display="flex">
//        {/* ... (unchanged) */}
// </Box>
// </Box>
//  );
// };
// export default Topbar;




// import React, { useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import Header from "../../components/Header";
// import Topbar from "../../components/Topbar"; // Import the Topbar component

// const TeamIndex = () => {
//  const theme = useTheme();
//  const colors = tokens(theme.palette.mode);
//  const [searchQuery, setSearchQuery] = useState(""); // State for search query
//  const handleSearch = (query) => {
//    setSearchQuery(query);
//  };
//  const columns = [
//    // ... (unchanged)
//  ];
//  // Filter rows based on search query
//  const filteredRows = mockDataTeam.filter((row) => {
//    return (
//      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//      row.email.toLowerCase().includes(searchQuery.toLowerCase())
//      // Add more fields if needed
//    );
//  });
//  return (
// <Box m="20px">
//      {/* Pass search logic and query to Topbar */}
// <Topbar onSearch={handleSearch} />
// <Header title="TEAM" subtitle="Managing the Team Members" />
// <Box
//        m="40px 0 0 0"
//        height="75vh"
//        // ... (unchanged)
// >
// <DataGrid checkboxSelection rows={filteredRows} columns={columns} />
// </Box>
// </Box>
//  );
// };
// export default TeamIndex;



