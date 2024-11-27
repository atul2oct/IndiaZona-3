import { IconButton, Button, Stack, Typography, Box } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import React, { useState } from 'react'
import Dropdown from "../component/common/Dropdown";
import SearchBar from "../component/common/SearchBar";
import HeadingDynamic from "../component/common/HeadingDynamic";
import TableComponent from "../component/seller/TableComponent";
import FilterDropDown from "../component/seller/FilterDropDown";

const SellerPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
  return (  

    <Box display="flex" flexDirection="column" justifyContent="center" gap={1} mx={4}>
    {/* heading */}
      <Typography variant="body2" fontFamily="Roboto" fontWeight={400} color="#9B9B9B">
        <HeadingDynamic/>
      </Typography>

      {/* search filter action button */}
      <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
        <SearchBar/>

        <Box display="flex" justifyContent="center" gap={1}>

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
          <Dropdown anchorEl={anchorEl} onClose={handleClose}>
            <FilterDropDown onClose={handleClose}/>
          </Dropdown>


          {/* Button */}
          <Button size="small" variant="contained"  sx={{backgroundColor: "#3F59A3",fontWeight: 600,fontSize: "14px",}} >
            Bulk Action
          </Button>
        </Box>

      </Stack>

      {/* render user details */}
      <TableComponent/>

    </Box>
    
  )
}

export default SellerPage