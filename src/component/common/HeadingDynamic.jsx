import React from 'react'
import { useLocation } from 'react-router-dom';
import { sidebarLinks } from '../../data/dashboardLinks';

const HeadingDynamic = () => {
    const location = useLocation();

    // Dynamically find the active link based on location.pathname
    const matchedLink = sidebarLinks.find(link => link.path === location.pathname);

    // Return the name of the matched link or a default heading
    const heading = matchedLink ? matchedLink.name : 'Dashboard'; // Adjust 'Dashboard' as default
  return <>{heading}</>;
}

export default HeadingDynamic