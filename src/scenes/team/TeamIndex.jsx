// import { Box, Typography,  useTheme } from "@mui/material";

// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataTeam } from "../../Data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import Header from "../../components/Header";

// const TeamIndex = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "accessLevel",
//       headerName: "Access Level",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (

//            <Box
//             width="60%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               access === "admin"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "user" && <LockOpenOutlinedIcon />}
//             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {access}
//             </Typography>
//           </Box>

//         );
//       },
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header title="TEAM" subtitle="Managing the Team Members" />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
//       </Box>
//     </Box>
//   );
// };

// export default TeamIndex;

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import Header from "../../components/Header";

// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import DeleteIcon from '@mui/icons-material/Delete';
import ModalIndex from "./ModalIndex";
const TableComp = ({ tasks, searchQuery }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Registrar ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Access Level</TableCell>
              <TableCell>Actions</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task.registrarId}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.age}</TableCell>
                <TableCell>{task.phoneNumber}</TableCell>
                <TableCell>{task.email}</TableCell>
                <TableCell>{task.city}</TableCell>

                <TableCell>
                  <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                      task.accessLevel === "admin"
                        ? colors.greenAccent[600]
                        : task.accessLevel === "manager"
                          ? colors.greenAccent[700]
                          : colors.greenAccent[700]
                    }
                    borderRadius="4px"
                  >
                    {task.accessLevel === "admin" && (
                      <AdminPanelSettingsOutlinedIcon />
                    )}
                    {task.accessLevel === "manager" && <SecurityOutlinedIcon />}
                    {task.accessLevel === "user" && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                      {task.accessLevel}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell >
                  <ModalIndex />
                  {/* <BorderColorIcon variant="contained" color="success" style={{ margin: "5px", cursor: "pointer" }} />
                  <DeleteIcon variant="outlined" color="error" style={{ margin: "5px", cursor: "pointer" }} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
export default TableComp;
