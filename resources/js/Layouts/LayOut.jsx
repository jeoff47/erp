import SideBar from '@/Components/sidebar/SideBar';
import React from 'react';
import NavBar from '@/Components/navBar/NavBar';

const LayOut = ({ children }) => {
    return (
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
            <NavBar />
            <main className="flex-1 p-6 bg-gray-100">
            {children}
            </main>
        </div>
    </div>
    );
};

export default LayOut;
