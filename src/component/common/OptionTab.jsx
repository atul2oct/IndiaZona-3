import { Button } from '@mui/material'
import React from 'react'

const OptionTab = ({status,handleChange,option}) => {

  return (
    <Button
        onClick={() => handleChange(option)}
        variant={status === option ? 'contained' : 'outlined'}
        sx={{
            minWidth: 100, // Minimum width of the button
            maxWidth: 'fit-content', // Allows the button to expand based on content
            padding: '8px 16px',
            border: '1px solid transparent',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '10px',
            margin: '0 2px',
            backgroundColor: status === option ? '#2e4f8f' : '#DEEAF9',
            '&:hover': {
                backgroundColor: '#2e4f8f', // Custom background color
                color: 'white',
                border: 'none',             // Remove the border on hover
            },
            color: status === option ? '#fff' : '#405AA4',
            textTransform: 'none', // Prevent text from being automatically uppercased
        }}
      >
        {option}
            
    </Button>
  )
}

export default OptionTab