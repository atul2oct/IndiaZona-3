import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CategoryBoxes = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle redirection
  const handleRedirect = (url) => {
    navigate(url); // Navigate to the provided URL
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      {/* Box 1 */}
      <Box
        onClick={() => handleRedirect('/category')} // Replace with your category link
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f0f0f0',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#e1e1e1',
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CATEGORY</Typography>
        <Typography variant="body2">November 2024</Typography>
        <Typography variant="body2">11:00 pm</Typography>
        <Typography variant="body2">
          FAQs, or Frequently Asked Questions, serve as a quick and easy way for customers to find answers to common inquiries without needing to contact support.
        </Typography>
      </Box>

      {/* Box 2 */}
      <Box
        onClick={() => handleRedirect('/faq')} // Replace with your FAQ link
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f0f0f0',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#e1e1e1',
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CATEGORY</Typography>
        <Typography variant="body2">November 2024</Typography>
        <Typography variant="body2">11:00 pm</Typography>
        <Typography variant="body2">
          By addressing typical concerns about products, services, shipping, returns, and more, FAQs enhance customer satisfaction and streamline the overall user experience.
        </Typography>
      </Box>

      {/* Box 3 */}
      <Box
        onClick={() => handleRedirect('/about')} // Replace with your about page link
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f0f0f0',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#e1e1e1',
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CATEGORY</Typography>
        <Typography variant="body2">November 2024</Typography>
        <Typography variant="body2">11:00 pm</Typography>
        <Typography variant="body2">
          A well-crafted FAQ page builds trust, reduces uncertainty, and can help guide potential customers through the buying process by providing clarity and reassurance.
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryBoxes;
