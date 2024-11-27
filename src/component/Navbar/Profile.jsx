import React, { useEffect, useState } from 'react';
import { MenuItem, IconButton, Avatar, Box, Typography } from '@mui/material';
import { VscDashboard, VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Dropdown from '../common/Dropdown';


const Profile = () => {

    const [open, setOpen] = useState(null); // The state to control the Menu (dropdown)

    // user details
    const [user, setUser] = useState({
        firstName: 'abc',
        lastName: 'xyz',
        accountType: 'Admin',
        image: '',
    });
    console.log(user)

    useEffect(() => {
        // fetch the user data from api after the user is initialized
        const firstName= 'Atul';
        const lastName= 'Yadav';
        const accountType= 'Admin';
        const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;

        setUser({
            firstName,
            lastName,
            accountType,
            image:userImage,
        });
    }, []); // Only run the effect when the user data changes

    const handleClick = (event) => {
        // Open the menu when clicking the button
        console.log(event.currentTarget)
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        // Close the menu
        setOpen(null);
    };

    const handleLogout = () => {
        // Logout logic
        setUser({
            firstName: 'abc',
            lastName: 'xyz',
            accountType: 'Admin',
            image: '', // Leave the image field empty initially
        })
        setOpen(null); // Close the menu
    };

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end" gap={1}>
        {/* Profile button with dropdown */}
        <IconButton onClick={handleClick}>
            <Avatar src={user?.image} alt={`profile-${user?.firstName}`} sx={{ width: 60, height: 60 }} />
        </IconButton>

        {/* Dropdown Menu using MUI Menu */}
        <Dropdown
            anchorEl={open} // This is the element to which the menu will be attached
            onClose={handleClose} // Close the menu when clicked outside
        >
            {/* Dashboard Link */}
            <Link to="/dashboard" style={{ textDecoration: 'none' }} onClick={handleClose}>
                <MenuItem>
                    <VscDashboard />
                    Dashboard
                </MenuItem>
            </Link>

            {/* Logout */}
            <MenuItem onClick={handleLogout}>
                <VscSignOut />
                Logout
            </MenuItem>
        </Dropdown>

        {/* First name and account type*/}
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            
            <Typography variant="body2" fontWeight="bold" color="primary">
                {user.firstName}
            </Typography>
            
            <Typography variant="body2" color="black">{user.accountType}</Typography>
        </Box>
  </Box>
  );
};

export default Profile;
