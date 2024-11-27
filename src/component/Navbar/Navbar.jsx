import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Logo from "../../Assests/Images/Logo.png";
import Topbar from './Topbar';
import { Box } from '@mui/material';

const Navbar = () => {
    return (
        <Box display="flex" minHeight="calc(100vh - 3.5rem)" position="relative">

            {/* Sidebar Section */}
            <Box display="flex" flexDirection="column" mx="auto" borderRight={2} borderColor="#E6EDFF">
                {/* Logo */}
                <Link to="/">
                <Box component="img" src={Logo} alt="logo" sx={{ objectFit: "contain", height: 112 }} />
                </Link>

                {/* Sidebar */}
                <Sidebar />
            </Box>

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