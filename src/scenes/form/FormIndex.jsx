// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// const FormIndex = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Box m="20px">
//       <Header title="CREATE USER" subtitle="Create a New User Profile" />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="First Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.firstName}
//                 name="firstName"
//                 error={!!touched.firstName && !!errors.firstName}
//                 helperText={touched.firstName && errors.firstName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Last Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.lastName}
//                 name="lastName"
//                 error={!!touched.lastName && !!errors.lastName}
//                 helperText={touched.lastName && errors.lastName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Contact Number"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.contact}
//                 name="contact"
//                 error={!!touched.contact && !!errors.contact}
//                 helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 1"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address1}
//                 name="address1"
//                 error={!!touched.address1 && !!errors.address1}
//                 helperText={touched.address1 && errors.address1}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 2"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address2}
//                 name="address2"
//                 error={!!touched.address2 && !!errors.address2}
//                 helperText={touched.address2 && errors.address2}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };
// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
// };
// export default FormIndex;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";

const FormIndex = ({ onAddTask }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [task, setTask] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [registrarId, setRegistrarId] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task && age && phoneNumber && email && accessLevel && registrarId && city) {
      const newTask = {
        name: task,
        age,
        phoneNumber,
        email,
        accessLevel,
        registrarId,
        city,
      };
      // Pass the new task to the parent component
      onAddTask(newTask);
      // Reset the input fields
      setTask('');
      setAge('');
      setPhoneNumber('');
      setEmail('');
      setAccessLevel('');
      setRegistrarId('');
      setCity('');

      const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      allTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(allTasks));
      // Navigate to the '/table' route
      navigate('/team');
    }
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Registrar ID"
            name="firstName"
            value={registrarId}
            onChange={(e) => setRegistrarId(e.target.value)}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{ gridColumn: "span 2" }}

          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ gridColumn: "span 2" }}

          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ gridColumn: "span 2" }}

          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ gridColumn: "span 2" }}

          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FormControl fullWidth variant="filled">
            <InputLabel>Select Access Level</InputLabel>
            <Select
              value={accessLevel}
              onChange={(e) => setAccessLevel(e.target.value)}
            >
              <MenuItem value="">Select Access Level</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Formik>


      <Box display="flex" justifyContent="end" mt="20px">
        <Button onClick={handleAddTask} color="secondary" variant="contained">
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default FormIndex;