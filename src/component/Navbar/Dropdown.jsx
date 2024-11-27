import React from "react";
import { Popover, Box } from "@mui/material";

const Dropdown = ({ anchorEl, onClose, options }) => {
    const isOpen = Boolean(anchorEl);
  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {/* Dropdown Content */}
      <Box sx={{ p: 2, minWidth: 150 }}>
        {/* {options.map((option, index) => (
          <p key={index}>{option}</p>
        ))} */}
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </Box>
    </Popover>
  );
};

export default Dropdown;
