import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { route } from "../../route";  // Ensure the route array is correctly imported
import { Link } from "@inertiajs/react";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  // State for managing submenus per route
  const [subMenuStates, setSubMenuStates] = useState(
    route.reduce((acc, item) => {
      acc[item.path] = false; // initialize each submenu as closed
      return acc;
    }, {})
  );

  const toggleSubMenu = (path) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [path]: !prevState[path], // toggle the specific submenu
    }));
  };

  return (
    <div
      className={`flex bg-red-100 h-screen p-6 ${open ? "w-64" : "w-20"} duration-300 relative m-0 flex-col`}
    >
      <div
        className={`text-green text-3xl absolute -right-3 top-9 rounded-full 
          bg-green-200 h-8 w-8 border border-green cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      >
        <FaAngleLeft />
      </div>

      <div className="py-3">
        logo
      </div>

      <ul className="pt-6">
        {route.map((route, index) => (
          <div key={index}>
            <li
              className="flex items-center text-sm gap-x-4 cursor-pointer py-2 hover:bg-gray-200"
              onClick={() => route.subMenu && toggleSubMenu(route.path)} // Toggle submenu on click
            >
              <span className="text-2xl">{route.icon}</span>
                  {open && <span>{route.path}
                    
              </span>}
              {/* If the route has a submenu, toggle its icon */}
              {route.subMenu && (
                <FaAngleRight
                  className={`${subMenuStates[route.path] ? "rotate-90" : ""} ${open ?"":"hidden"} ml-auto`} // Rotate on toggle
                />
              )}
            </li>

            {/* Render submenu if it's open */}
            {route.subMenu && subMenuStates[route.path] && open && (
              <ul>
                {route.subMenu.map((subMenuItem, index) => (
                  <li key={index} className="text-gray-500 text-sm pl-6 py-2">
                    {subMenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
