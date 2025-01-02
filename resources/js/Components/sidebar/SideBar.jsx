import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`flex bg-red-100 h-screen p-5 ${open ? "w-62" : "w-20"} duration-300`}>
      <div className="flex justify-center items-center relative">
        logo
        <div
          className={`bg-white text-green text-3xl absolute -right-3 
            top-9 rounded-full bg-green-200 h-8 w-8 border border-green cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaAngleLeft />
        </div>
      </div>
      <div className="px-5">
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
