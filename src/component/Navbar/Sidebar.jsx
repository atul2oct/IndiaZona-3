import React, { useState } from 'react';
import { Drawer, Box, List, Divider, IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { sidebarLinks } from '../../data/dashboardLinks'
import SidebarLink from './SidebarLink';
import Logo from "../../Assests/Images/Logo.png";
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg')); // Check for small screens
  const [isDrawerOpen, setDrawerOpen] = useState(!isSmallScreen); // Sidebar open state

  return (
    <Box display="flex" flexDirection="column" mx="auto" borderRight={2} borderColor="#E6EDFF" sx={{width: isSmallScreen ? 80 : 200,}}>
        {/* Toggle button for small screens */}
        {isSmallScreen && (
        <IconButton onClick={() => setDrawerOpen(!isDrawerOpen)} sx={{ position: 'absolute', top: 25 }}>
            <MenuIcon />
        </IconButton>
        )}

        {/* Sidebar Drawer */}
        <Drawer
            variant={isSmallScreen ? 'temporary' : 'permanent'}
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
                '& .MuiDrawer-paper': {
                width: isSmallScreen ? 80 : 200,
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                },
            }}
        >
            {/* Links Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Aligns items to the start horizontally
                justifyContent: 'flex-start', // Ensures the links stack at the top
                gap: 1, // Optional: Adds spacing between the links
                p: 0, // Removes default padding
            }}>

                {/* Logo Section */}
                {!isSmallScreen && (                    
                    <Link to="/">
                        <Box component="img" src={Logo} alt="logo" sx={{ objectFit: "contain", height: 112 }} />
                    </Link>
                )}
                {
                    sidebarLinks.map((link)=>{
                        
                        return (
                            <SidebarLink key={link.id} link={link.path} iconName={link.icon} name={link.name}/>
                        )

                    })
                }
            </Box>

            {/* Divider */}
            <Divider />
        </Drawer>
    </Box>
  );
};

export default Sidebar;
