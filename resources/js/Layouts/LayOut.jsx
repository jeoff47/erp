import SideBar from '@/Components/sidebar/SideBar';
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
 // Use Inertia Link for page navigation

const LayOut = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div >
                <SideBar/>
            </div>

            {/* Main content */}
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default LayOut;
