import React from 'react';
import { Box, Typography } from '@mui/material';

const Error = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'pink',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" color="error">
        Error - 404 Not Found
      </Typography>
    </Box>
  );
}

export default Error;
