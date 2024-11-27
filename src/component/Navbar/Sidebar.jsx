import React from 'react'
import { sidebarLinks } from '../../data/dashboardLinks'
import SidebarLink from './SidebarLink';

const Sidebar = () => {
    console.log('SidebarLink',sidebarLinks)
  return (
    <div className=''>
        <div className='flex min-w-[222px] flex-col h-[calc(100vh-3.5rem)] py-10'>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link)=>{
                        
                        return (
                            <SidebarLink key={link.id} link={link.path} iconName={link.icon} name={link.name}/>
                        )

                    })
                }
            </div>
            <div className='mx-auto mt-6 mb-6 h[1px] w-10/12 bg-[#E6EFF5]'></div>

        
        </div>
    
    </div>
  )
}

export default Sidebar