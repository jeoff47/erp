import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import React, { useState } from 'react';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-gray-800 p-4 px-8s flex items-center justify-between">
      {/* Left Side - Page Title */}
      <div className="text-white text-xl font-bold">
        My Page Title
      </div>
        <div className="flex px-4">

      {/* Center - Buttons */}
      <div className="flex space-x-4">
        <button className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
          <MdMessage/>
        </button>
        <button className="text-white px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition">
          <MdOutlineMailOutline/>
        </button>
      </div>

      {/* Right Side - User Icon and Dropdown */}
      <div className="flex items-center pl-4 space-x-4">
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 text-white">
            <FaRegUserCircle/>
            <span className="hidden md:block">John Doe</span>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden">
              <ul className="text-gray-700">
                <li>
                  <h1 className="block px-4 py-2 hover:bg-gray-100">Profile</h1>
                </li>
                <li>
                  <h1 className="block px-4 py-2 hover:bg-gray-100">Settings</h1>
                </li>
                <li>
                  <h1 className="block px-4 py-2 hover:bg-gray-100">Logout</h1>
                </li>
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
