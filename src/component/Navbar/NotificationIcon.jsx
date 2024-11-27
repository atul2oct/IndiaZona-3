import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function NotificationIcon() {
  // use setCount if any notification have arrived
    const [count, setCount] = useState(1);

  return (
    <Badge color="success" badgeContent={count}>
        <NotificationsNoneOutlinedIcon sx={{ color: '#FF8C00' }} />
    </Badge>
  );
}

