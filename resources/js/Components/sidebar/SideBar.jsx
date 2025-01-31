import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx"; 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ApplicationLogo from "../ApplicationLogo";
import route from "../../route"; // Ensure paths start with "/"

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuStates, setSubMenuStates] = useState({});
  const { url } = usePage(); // Get current URL

  const toggleSubMenu = (path) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [path]: !prevState[path], // Toggle the submenu
    }));
  };

  return (
    <div className={`flex bg-gray-50 h-screen ${open ? "w-64" : "w-20"} duration-300 relative flex-col`}>
      {/* Toggle button */}
      <div className={`text-white text-3xl absolute -right-4 top-10 rounded-full
          border-blue-500 bg-blue-600 h-10 w-10 border-4 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Collapse Sidebar" : "Expand Sidebar"}>
        <FaAngleLeft />
      </div>


      {/* Logo */}
      <div className="flex shrink-0 items-center mb-4 pt-2 p-2">
        <Link href="/">
          <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        </Link>
      </div>

      {/* Menu Items Container with scroll */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {route.map((routeItem) => (
            <div key={routeItem.path}>
              {/* Main Menu Item */}
              <li
                className={clsx(
                  "flex items-center text-sm gap-x-4 cursor-pointer hover:bg-gray-200 w-full px-3 py-2",
                  {
                    // Add blue border on the right for active items
                    "border-r-4 border-blue-500": url.toLowerCase() === `/${routeItem.path.toLowerCase()}`,
                    // Highlight the background of the active item
                    "bg-blue-100": url.toLowerCase() === `/${routeItem.path.toLowerCase()}`,
                  }
                )}
                onClick={() => routeItem.subMenu && toggleSubMenu(routeItem.path)}
              >
                <span className="text-2xl">{routeItem.icon}</span>
                {open && (
                  <Link href={`/${routeItem.path.toLowerCase()}`} className="w-full">
                    <span>{routeItem.path}</span>
                  </Link>
                )}

                {/* Submenu Toggle Icon */}
                {routeItem.subMenu && (
                  <FaAngleRight
                    className={clsx("transition-transform duration-300", {
                      "rotate-90": subMenuStates[routeItem.path],
                      "hidden": !open
                    })}
                  />
                )}
              </li>

              {/* Submenu Items */}
              {routeItem.subMenu && subMenuStates[routeItem.path] && open && (
                <ul className="pl-6 space-y-1">
                  {routeItem.subMenu.map((subMenuItem) => (
                    <li
                      key={subMenuItem.path}
                      className={clsx("text-gray-500 text-sm py-2 hover:bg-gray-200 w-full px-3", {
                        // Highlight the background of active submenu item
                        "bg-gray-200": url.toLowerCase() === `/${subMenuItem.path.toLowerCase()}`
                      })}
                    >
                      <Link href={`/${subMenuItem.path.toLowerCase()}`}>
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
    </div>
  );
};

export default SideBar;
