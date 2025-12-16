import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const MyComponent = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Hello MUI</Typography>
      <Button variant="contained">Click Me</Button>
    </Box>
  );
};

export default MyComponent;
