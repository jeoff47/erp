import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const SideBar = () => {
    const [open,setOpen]=useState(true);
    
  return (
    <div className={`flex bg-red-100 h-screen p-5 p-8 ${open ? w-72:w-20 } duration-300 `}>
        <div className="flex justufy-item-center align-item-centre relative">
            logo
            <div className={`bg-white text-green text-3xl absolute -right-3 top-9
                            rounded-full bg-green-200 h-2 w-2 border border-green cursor-pointer
                            ${!open && "rotate-180"}`}
                            onClick={()=>setOpen(!open)}>
             <FaAngleLeft />
            </div>
        </div>
        <div className='px-05'>
            <ul className=''>
                <li>Dashboard</li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar