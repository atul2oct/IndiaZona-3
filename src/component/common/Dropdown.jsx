import React from "react";
import { Popover, Box } from "@mui/material";

const Dropdown = ({ anchorEl, onClose, children }) => {
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
      <Box p={2} sx={{ minWidth: 150, maxWidth: 370 }}>
        {children}
      </Box>
    </Popover>
  );
};

export default Dropdown;
