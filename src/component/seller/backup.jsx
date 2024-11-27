{/* Dropdown Menu using MUI Menu */}
<Menu
anchorEl={open} // This is the element to which the menu will be attached
open={Boolean(open)} // If the anchor is not null, the menu will open
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
</Menu>