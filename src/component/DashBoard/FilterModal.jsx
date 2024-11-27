import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Backdrop,
  useMediaQuery,
} from '@mui/material';
import OptionTab from './OptionTab';
import Icon from './Icon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CategoryIcon from '@mui/icons-material/Category';
import DownloadIcon from '@mui/icons-material/Download';

const FilterModal = ({ open, onClose, handleOpenFilter, handleOpenCategory }) => {

  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus); // Update the status to the selected value
    console.log(status)
  };
  const handleDateChange = (field) => (event) =>
    setDateRange({ ...dateRange, [field]: event.target.value });

  const clearDateRange = () => setDateRange({ start: '', end: '' });

  const applyFilters = () => {
    onClose(); // Close the modal after applying filters
  };

  const handleDownload = () => {
    // Your download logic here
    console.log('Downloading...');
  };

  return (
    <Backdrop  open={open} onClick={onClose}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          gap:'10px',
          width: isSmallScreen ? '90%' : '400px',
          bgcolor: 'white',
          boxShadow: 3,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          position: 'relative',
        }}
        aria-labelledby="filter-modal-title"
        aria-describedby="filter-modal-description"
      >

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap:1, marginBottom: 1 }}>

          <Icon onClick={handleOpenFilter}>
              <CalendarMonthIcon sx={{ color: '#405AA4' }}/>
          </Icon>

          <Icon onClick={handleOpenCategory}>
              <CategoryIcon sx={{ color: '#405AA4' }}/>
          </Icon>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#405AA4', // Custom background color
              color: 'white', // Text color (white for contrast)
              padding: '4px 6px', // Reduced padding to make the button smaller
              fontSize: '0.75rem', // Smaller font size
              minWidth: 'auto', // Remove the default min-width to make it more compact
              borderRadius: '4px', // Border radius for a smaller button
              '&:hover': {
                backgroundColor: 'white', 
                color: '#405AA4',
                border: '1px solid #405AA4',
              },
            }}
            onClick={handleDownload} // Add click handler
            endIcon={<DownloadIcon />} // Set the icon to appear after the text
          >
            Download Reports
          </Button>
        </Box>

        {/* Align the "Status" label to the left */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#00000082' }}>
            Status
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', marginBottom: 2,}}>
          <OptionTab status={status} handleChange={handleStatusChange} option={'monthly'}/>
          <OptionTab status={status} handleChange={handleStatusChange} option={'weekly'}/>
          <OptionTab status={status} handleChange={handleStatusChange} option={'daily'}/>
        </Box>

        {/* line */}
        <Box sx={{borderBottom: '1px solid #00000042', marginBottom: 2, marginTop:-2}}></Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Start Date"
            type="date"
            value={dateRange.start}
            onChange={handleDateChange('start')}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="End Date"
            type="date"
            value={dateRange.end}
            onChange={handleDateChange('end')}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />           
          
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" color="secondary" onClick={clearDateRange} sx={{
              backgroundColor: 'white',
              color:'#405AA4',
              border:'1px solid #00000040',
            '&:hover': {
              backgroundColor: '#00000040', // Custom background color
              color: 'white',
              border: 'none',             // Remove the border on hover
            },
          }}>
            Clear Date Range
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

        <Button
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            minWidth: '30px',
            height: '30px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
          aria-label="Close"
        >
          ×
        </Button>
      </Box>
    </Backdrop>
  );
};

export default FilterModal;
