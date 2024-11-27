import { IconButton } from '@mui/material'
import React from 'react'

const Icon = ({children ,onClick}) => {
  return (
    <IconButton
            onClick={onClick}
            sx={{
                border: '1px solid #405AA4', // Border style
                borderRadius: '10%',         // Make it round
                padding: '8px',              // Space around the icon
                '&:hover': {
                backgroundColor: 'transparent', // Change background on hover
                },
                backgroundColor: '#DEEAF9',
            }}
        >
            {children }
        </IconButton>
  )
}

export default Icon