import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';

const CustomBtn = ({color,text,size}) => {
  return (
    <Button
        variant="text"
        size={size}
        color={color}
        endIcon={<ArrowDropDownIcon />}
        disableElevation // Optional: Removes the button's shadow for a flatter look
        fullWidth
    >
        {text}
    </Button>
  )
}

export default CustomBtn