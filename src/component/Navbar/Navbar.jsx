import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Logo from "../../Assests/Images/Logo.png";
import Topbar from './Topbar';

const Navbar = () => {
    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)] '>
            <div className='flex-col mx-auto border-r-2 border-r-[#E6EDFF]'>
            {/* logo */}
                <Link to = '/'>
                    <img src={Logo} alt="logo" className="object-contain h-28"/>
                </Link>
                {/* navbar/ sidebar */}
                <Sidebar/>

            </div>

            {/* Main Content area */}
            <div className='flex flex-col flex-1'>

                {/* Topbar */}
                <div className='border-b-2 border-b-[#E6EDFF]'>
                    <Topbar />
                </div>

                {/* Content Section */}
                <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
      )
}

export default Navbar