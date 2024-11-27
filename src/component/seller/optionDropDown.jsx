import React, { useState } from 'react'

const optionDropDown = ({onClose}) => {

    const Approval = ['All','Approved','Pending','Profile Incomplete'];

    const [status, setStatus] = useState('');

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus); // Update the status to the selected value
        console.log(status)
    };

    // Close the modal after applying filters
    const clearFilter = () => {
        setStatus('');
        onClose();
    }

    const applyFilters = () => {
        onClose(); 
    };

  return (
    <div>optionDropDown</div>
  )
}

export default optionDropDown