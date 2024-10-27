import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Save } from '@mui/icons-material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function TaskSetModal({ open, setOpen, my_api_data, set_my_api_data }) {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: '',
    weight: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSaveClick = () => {
    my_api_data = [
      {
        ...my_api_data[0],
        [formData.name.toLowerCase()]: { 'val': formData.name, 'task_set': '' }
      },
      ...my_api_data.slice(1)
    ]
    set_my_api_data(my_api_data)
  };

  return (
    <div>
      {open &&
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Task
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Fill the task details
              </Typography>
              <TextField id="standard-basic" label="Name" variant="standard" name="name"
                value={formData.name} onChange={handleChange} />

              {/* <TextField id="standard-basic" label="Weight" variant="standard" name="weight"
                value={formData.weight} onChange={handleChange} /> */}
              <br></br>
              <br></br>
              <Button variant="contained" endIcon={<Save />} onClick={handleSaveClick}>
                Save
              </Button>
            </Box>

          </Fade>

        </Modal>}
    </div>
  );
}
