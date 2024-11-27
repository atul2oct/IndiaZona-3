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
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
      fullWidth
      sx={{
        backgroundColor: '#f4f6f8',
        borderRadius: 3,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
