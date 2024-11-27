import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    TextField,
    Button,
    Backdrop,
    Modal, 
    Grid 
  } from '@mui/material';
import OptionTab from './OptionTab';
import Icon from './Icon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CategoryIcon from '@mui/icons-material/Category';

const CategoryModal = ({ open, onClose, handleOpenFilter, handleOpenCategory }) => {
    
    const [category, setCategory] = useState('');

    const handleStatusChange = (newStatus) => {
        setCategory(newStatus); // Update the status to the selected value
        console.log(category)
      };

  const applyFilters = () => {
    console.log({ category });
    onClose(); // Close the modal after applying filters
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
            width: '500px',
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
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'flex-start',
                marginBottom: 1,
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
          }}>


                {/* Align the "Status" label to the left */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#00000082' }}>
                        Category
                    </Typography>
                </Box>

                {/* line */}
                <Box sx={{borderBottom: '1px solid #00000042', marginBottom: 2, marginTop:1}}></Box>

                <Box sx={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', gap: 2, marginBottom: 2 }}>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Sell on Indiazona'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Fees and Charges'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Product Listing'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Managing your Business'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Orders & Return Management'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Payments'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='GST FAQs'/>
                    <OptionTab status={category} handleChange={handleStatusChange} option='Vendor Policies'/>
                </Box>
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
  )
}

export default CategoryModal

