import * as React from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik } from 'formik';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalIndex() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <BorderColorIcon variant="contained" color="success" style={{ margin: "5px", cursor: "pointer" }} onClick={handleOpen} />
            <DeleteIcon variant="outlined" color="error" style={{ margin: "5px", cursor: "pointer" }} />
            {/* <Button onClick={handleOpen} variant="contained" color="success">Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit User Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Formik>
                            <Box display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Registrar ID"
                                    name="firstName"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Name"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Age"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Phone Number"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="City"
                                />
                                <FormControl fullWidth variant="filled">
                                    <InputLabel>Select Access Level</InputLabel>
                                    <Select>
                                        <MenuItem value="">Select Access Level</MenuItem>
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="manager">Manager</MenuItem>
                                        <MenuItem value="user">User</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Formik>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button color="secondary" variant="contained">
                                Update User Details
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}