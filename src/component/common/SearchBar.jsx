import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term on change
  };

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
        maxWidth: '653px', // max width constraint
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
