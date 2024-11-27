import React, { useState } from 'react'
import FilterModal from '../component/DashBoard/FilterModal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CategoryIcon from '@mui/icons-material/Category';
import CategoryModal from '../component/DashBoard/CategoryModal';
import Icon from '../component/DashBoard/Icon';
import SearchBar from '../component/DashBoard/SearchBar';
import CategoryBoxes from '../component/DashBoard/CategoryBoxes';

const Dashboard = () => {
    const [showFilter, setShowFilter] = useState({ filter: false, category: false });
    // Function to toggle visibility of the modal
  const handleOpen = (filterType) => {
    setShowFilter((prev) => ({...prev,[filterType]:true}))
    // console.log('click',showFilter)
  }
  const handleClose = (filterType) => {
    setShowFilter((prev) => ({...prev,[filterType]:false}))
    // console.log('clicked',showFilter)
  }
  return (
    <div>

        <div className='flex justify-between mx-6 mt-14'>
            <h2 className='text-2xl text-[#405AA4] font-semibold'>Updates</h2>
            <div className='flex gap-5'>

                <Icon onClick={() => handleOpen('filter')}>
                    <CalendarMonthIcon sx={{ color: '#405AA4' }}/>
                </Icon>

                <Icon onClick={() => handleOpen('category')}>
                    <CategoryIcon sx={{ color: '#405AA4' }}/>
                </Icon>

                <SearchBar/>
            </div>
        </div>

        <div>
            <CategoryBoxes/>
        </div>

      <FilterModal open={showFilter.filter} onClose={() => handleClose('filter')} handleOpenFilter={()=>handleOpen('filter')} handleOpenCategory={()=>handleOpen('category')}/>
      <CategoryModal open={showFilter.category} onClose={() => handleClose('category')} handleOpenFilter={()=>handleOpen('filter')} handleOpenCategory={()=>handleOpen('category')} />

      {/* <Modal showFilter={showFilter} setShowFilter={setShowFilter} handleOpen={handleOpen} handleClose={handleClose}/> */}
  </div>
  )
}

export default Dashboard