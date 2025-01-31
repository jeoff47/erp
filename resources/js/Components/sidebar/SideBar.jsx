import { useState } from "react";
import { Link, usePage } from "@inertiajs/react"; // usePage is useful for getting the current active path
import clsx from "clsx"; 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ApplicationLogo from "../ApplicationLogo";
import route from "../../route"

// Assuming 'route' is your routes array
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuStates, setSubMenuStates] = useState({});
  const { url } = usePage(); // This helps to get the current active URL dynamically

  const toggleSubMenu = (path) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [path]: !prevState[path], // Toggle the submenu
    }));
  };

  return (
    <div
      className={`flex bg-gray-100 h-screen p-6 ${open ? "w-64" : "w-20"} duration-300 relative m-0 flex-col`}
    >
      {/* Toggle button to collapse/expand sidebar */}
      <div
        className={`text-green text-3xl absolute -right-3 top-9 rounded-full 
          bg-green-200 h-8 w-8 border border-green cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        <FaAngleLeft />
      </div>

      <div className="flex shrink-0 items-center mb-6">
        <Link href="/">
          <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        </Link>
      </div>

      <ul className="space-y-2">
        {route.map((routeItem) => (
          <div key={routeItem.path}>
            {/* Main Menu Item */}
            <li
              className={clsx(
                "flex items-center text-sm gap-x-4 cursor-pointer hover:bg-gray-200 w-full",
                {
                  "border-l-4 border-blue-500": url === routeItem.path, // Highlight active item
                }
              )}
              onClick={() => routeItem.subMenu && toggleSubMenu(routeItem.path)} 
            >
              <span className="text-2xl">{routeItem.icon}</span>
              {open && (
                <Link href={routeItem.path} className="w-full">
                  <span>{routeItem.path}</span>
                </Link>
              )}

              {/* Show submenu toggle icon if there is a submenu */}
              {routeItem.subMenu && (
                <FaAngleRight
                  className={clsx(
                    subMenuStates[routeItem.path] && "rotate-90", // Rotate on toggle
                    { "hidden": !open }
                  )}
                  aria-expanded={subMenuStates[routeItem.path]} // ARIA attribute for accessibility
                />
              )}
            </li>

            {/* Submenu Items */}
            {routeItem.subMenu && subMenuStates[routeItem.path] && open && (
              <ul className="pl-6 space-y-1">
                {routeItem.subMenu.map((subMenuItem) => (
                  <li
                    key={subMenuItem.path}
                    className="text-gray-500 text-sm py-2 hover:bg-gray-200 w-full"
                    aria-expanded={subMenuStates[routeItem.path]} // ARIA attribute for submenu
                  >
                    <Link href={subMenuItem.path}>
                      <span>{subMenuItem.path}</span>
                    </Link>
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
