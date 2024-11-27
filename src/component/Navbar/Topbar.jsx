import React from 'react';
import Profile from './Profile';
import NotificationIcon from './NotificationIcon';
import { Box, Typography } from '@mui/material';
import HeadingDynamic from '../common/HeadingDynamic';
import CustomBtn from '../common/CustomBtn';

const Topbar = () => {

    return (

        <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>

        {/* dynamic heading */}
            <Typography variant="h4" fontWeight="bold" color="primary">
                <HeadingDynamic/>
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>

                {/* Notification bell */}

                <NotificationIcon/>
                {/* language */}
                <CustomBtn color="warning" text='Eng' size='large'/>
                {/* avatar name and account type */}
                <Profile/>
            </Box>
        </Box>

    );
};

export default Topbar;
