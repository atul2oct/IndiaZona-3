import React, { useState } from 'react'
import {
    Box,
    Typography,
    Button,
    useMediaQuery,
  } from '@mui/material';
import OptionTab from '../common/OptionTab';

const FilterDropDown = ({onClose}) => {

    const Approval = ['All','Approved','Pending','Profile Incomplete'];

    const [status, setStatus] = useState('');

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus); // Update the status to the selected value
        console.log(status)
    };

    // Close the modal after applying filters
    const clearFilter = () => {
        setStatus('');
        onClose();
    }

    const applyFilters = () => {
        onClose(); 
    };

  return (
    <Box display="flex" flexDirection='column' justifyContent="center" gap={4}>
        {/* Align the "Status" label to the left */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#00000082' }}>
            Select FAQ Filter
        </Typography>

        <Box display="flex" flexWrap='wrap' gap={1}>
            {
                Approval.map((option,index) => ( <OptionTab key={index} status={status} handleChange={handleStatusChange} option={option}/> ))
            }
        </Box>

        <Box display="flex" justifyContent="space-evenly">
          <Button variant="outlined" color="secondary" onClick={clearFilter} sx={{
              backgroundColor: 'white',
              color:'#405AA4',
              border:'1px solid #00000040',
            '&:hover': {
              backgroundColor: '#00000040', // Custom background color
              color: 'white',
              border: 'none',             // Remove the border on hover
            },
          }}>
            Clear Filter
          </Button>

          <Button variant="contained" color="primary" onClick={applyFilters} sx={{
            backgroundColor: '#405AA4', // Custom background color
            color: 'white',              // Text color (white for contrast)
            '&:hover': {
              backgroundColor: 'white', 
              color:'#405AA4',
              border:'1px solid #405AA4'
            },
          }}>
            Apply Filters
          </Button>
        </Box>

      </Box>
  )
}

export default FilterDropDown