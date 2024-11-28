import React, { useEffect, useState } from 'react';
import {users} from '../../data/user'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Box, Select, MenuItem, FormControl, IconButton, useMediaQuery  } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dropdown from '../common/Dropdown';
import CustomBtn from '../common/CustomBtn';
import { useTheme } from '@mui/material/styles';


const TableComponent = () => {

    const theme = useTheme(); // Access the theme object
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check for small screens

    const Approval = ['All','Approved','Pending'];
    // Define the actions array
    const actions = [
      'Profile / Edit',
      'Log in as this Seller',
      'Go to Payment',
      'Payment History',
      'Chat',
      'Ban this seller',
      'Resend E-signature',
      'Manage E-sign manually',
      'Manage Failed KYC',
      'Delete'
    ];
    const [selectedApproval, setSelectedApproval] = useState('All');
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleApprovalChange = (approval) => {
      setSelectedApproval(approval);
    };

    const handleCheckboxChange = (name) => {
      const updatedSelectedUsers = new Set(selectedUsers);
      if (updatedSelectedUsers.has(name)) {
        updatedSelectedUsers.delete(name);
      } else {
        updatedSelectedUsers.add(name);
      }
      setSelectedUsers(updatedSelectedUsers);
    };

    useEffect(() => {
      // Filtering users based on selectedApproval
      const filtered = users.filter((user) => {
        if (selectedApproval === 'All') {
          return true;
        }
        return user.approval === selectedApproval;
      });
      setFilteredUsers(filtered);
    }, [selectedApproval]);  // Run effect whenever selectedApproval changes

    const handleSelectAllChange = (event) => {
      if (event.target.checked) {
        setSelectedUsers(new Set(filteredUsers.map((user) => user.name)));
      } else {
        setSelectedUsers(new Set());
      }
    };

    const changeApproval = (userName, newApproval) => {
      // Update the approval in the filteredUsers array
      setFilteredUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.name === userName ? { ...user, approval: newApproval } : user
        )
      );
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 2,      
      [theme.breakpoints.down('sm')]: {
        marginBottom: 1,
        justifyContent: 'center', // Align items centrally on smaller screens
      },
    }}>

      {/* Filter options */}
      <Box marginBottom={2} display="flex" flexWrap="wrap">
        {Approval.map((approval) => (
          <Button
            key={approval}
            sx={{
              color: selectedApproval === approval ? '#FF8C00' : '#000',
              borderBottom: selectedApproval === approval ? '2px solid #FF8C00' : '2px solid black',
              borderRadius: '0',
              px: '18px'
            }}
            onClick={() => handleApprovalChange(approval)}
          >
            {approval}
          </Button>
        ))}
      </Box>

      {/* Table */}
      <TableContainer
        sx={{
            borderRadius: '8px', // Apply border-radius to TableContainer
            overflow: 'hidden', // Ensures the rounded corners are respected
            border: '1px solid #BABABA' // Add border to the container
        }}
        >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={filteredUsers?.every(user => selectedUsers.has(user.name))}
                  onChange={handleSelectAllChange}
                  color="primary"
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Approval</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user,index) => (
              <TableRow key={user.name} sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#F9FAFC',}}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUsers.has(user.name)}
                    onChange={() => handleCheckboxChange(user.name)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phoneNo}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>

                <TableCell sx={{ maxWidth: 150}}>
                  <FormControl>
                    <Select value={user.approval} onChange={(event) => changeApproval(user.name, event.target.value)} IconComponent={() => null} 
                    sx={{
                      '& .MuiSelect-select': {
                        padding: '0px', // Customize padding as needed
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Remove the outline
                      },
                      
                    }}
                    >
                      <MenuItem value="Pending"><CustomBtn text='Pending' color="warning" size='small'/></MenuItem>
                      <MenuItem value="Profile Incomplete"><CustomBtn text='Profile Incomplete' color="" size='small'/></MenuItem>
                      <MenuItem value="Approved"><CustomBtn text='Approved' color="success" size='small'/></MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>

                <TableCell>                
                  {/* Icon Button to trigger the dropdown */}
                  <IconButton
                      onClick={handleClick}
                      sx={{
                      "&:hover": {
                          backgroundColor: "rgba(255, 140, 0, 0.1)", // Light orange on hover
                      },
                      }}
                  >
                      <MoreVertIcon/>
                  </IconButton>

                  {/* Material-UI dropdown */}
                  <Dropdown anchorEl={anchorEl} onClose={handleClose}>
                    {/* Logout */}
                    {
                      actions.map((action,index) => (
                        <MenuItem key={index} onClick={handleClose}>
                          {action}
                        </MenuItem>
                      ))
                    }
                    
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
