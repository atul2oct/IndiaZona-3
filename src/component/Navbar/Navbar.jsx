import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check for small screens
    console.log(isSmallScreen)
    return (
        <Box display="flex" minHeight="calc(100vh - 3.5rem)" position="relative">

            {/* Sidebar Section */}
            <Sidebar/>            

            {/* Main Content Section */}
            <Box display="flex" flexDirection="column" flex={1}>

                {/* Topbar */}
                <Box mx={4} my={1}>
                    {/* <Divider sx={{ borderColor: "#E6EDFF" }} /> */}
                    <Topbar />
                </Box>

                {/* Content Section */}
                <Box flex={1} overflow="auto" paddingTop={2} borderTop={2} borderColor="#E6EDFF">
                    <Outlet />
                </Box>
            </Box>

        </Box>
      )
}

export default Navbar