import { IconButton, Button, Stack } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import React, { useState } from 'react'
import Dropdown from "../component/Navbar/Dropdown";
import SearchBar from "../component/common/SearchBar";

const SellerPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    

    const options = []
  return (
    <div>
    
    
    <Stack spacing={2} direction="row" alignItems="center">

        <SearchBar/>

    {/* Icon Button to trigger the dropdown */}
        <IconButton
            onClick={handleClick}
            sx={{
            border: "2px solid #FF8C00", // Border styling
            color: "#FF8C00", // Icon color
            padding: "8px", // Space around the icon
            borderRadius: "10%", // Rounded button
            "&:hover": {
                backgroundColor: "rgba(255, 140, 0, 0.1)", // Light orange on hover
            },
            }}
        >
            <FilterAltOutlinedIcon />
      </IconButton>

      {/* Material-UI dropdown */}
      <Dropdown anchorEl={anchorEl} onClose={handleClose} options/>


      {/* Button */}
      <Button
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "12px 18px",
          gap: "8px",
          width: "108px",
          height: "40px",
          backgroundColor: "#3F59A3",
          borderRadius: "5px",
          color: "#FFFFFF",
          fontFamily: "'Roboto', sans-serif",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "16px",
          textTransform: "none", // Prevents default uppercase styling
          "&:hover": {
            backgroundColor: "#2E4680", // Darker shade on hover
          },
        }}
      >
        Bulk Action
      </Button>



    </Stack>
    </div>
  )
}

export default SellerPage