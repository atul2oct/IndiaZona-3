import React, { useState } from 'react';
import { TextField, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term on change
  };

  const theme = useTheme();
  
  // Check if the screen width is 768px or less
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // 'md' corresponds to 768px

  return (
    <TextField
      variant="outlined"
      placeholder="Search via name, mobile number or email ID"
      value={searchTerm}
      onChange={handleSearchChange}
      fullWidth
      sx={{
        backgroundColor: '#f4f6f8', // background color
        borderRadius: 3, // rounded corners
        maxWidth: isSmallScreen ? '400px' : '600px', // Reduce width on small screens
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
