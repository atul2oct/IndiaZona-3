import React from 'react'
import * as Icons from "react-icons/vsc"
import { matchPath, useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import { Box, ButtonBase, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SidebarLink = ({link,iconName,name}) => {
    const Icon = Icons[iconName]    // Dynamically get the icon based on the `iconName` variable.

    const location = useLocation()

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg')); // Check for small screens

  return (
    <ButtonBase
      component={RouterLink}
      to={link}
      sx={{
        // width:'90%',
        position: 'relative',
        px: 3,
        py: 1,
        fontSize: '0.875rem',
        fontWeight: 'medium',
        backgroundColor: matchRoute(link) ? 'rgba(255,140,0,0.1)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textAlign: 'left',
        '&:hover': {
          backgroundColor: 'rgba(255,140,0,0.2)',
        },
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '0.2rem',
          backgroundColor: '#FF8C00',
          opacity: matchRoute(link) ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      ></span>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: matchRoute(link) ? '#FF8C00' : 'inherit',
            fontSize: '1rem',
          }}
        >
          <Icon className="text-lg"/>
          {!isSmallScreen && <span style={{ color: matchRoute(link) ? '#FF8C00' : 'inherit', minWidth: '100px', }}>{name}</span>}
          
        </Box>
    </ButtonBase>
  );
};

export default SidebarLink;
