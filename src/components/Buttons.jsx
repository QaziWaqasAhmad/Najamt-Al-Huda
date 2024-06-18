import React from 'react';
import { Button } from '@mui/material';

const defaultButtonStyle = {
  backgroundColor: '#007bff',
  color: '#ffffff', 
};

const Buttons = ({ name, className, onClick,id }) => {
  return (
    <Button
      type="button"
      id={id}
      variant="contained"
      style={{ ...defaultButtonStyle }}
      className={className}
      onClick={onClick}
      draggable="false"
    >
      {name}
    </Button>
  );
}

export default Buttons;
