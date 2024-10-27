import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddIconButton = ({ handleOnClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={handleOnClick}
    >
      Add
    </Button>
  );
};

export default AddIconButton;