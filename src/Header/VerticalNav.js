import React from "react";
import Calender from "../Components/Calender";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);



  return (
    <div className=" fixed left-0 footer w-16 h-screen  bg-[#EAF0FF] text-lg flex flex-col dark:bg-zinc-900 dark:text-white xs:bg-orange-100 xs:h-[5%] xs:p-1 xs:fixed  xs:bottom-0 sm:z-[5]  sm:h-[8%] sm:text-2xl sm:p-1 sm:fixed  sm:bottom-0 sm:w-full   ">
      <div className="flex flex-col items-center p-8 gap-10 sm:flex  xs:flex sm:p-2 xs:p-2 sm:gap2 xs:gap-2 sm:flex-row xs:flex-row  sm:items-center xs:items-center  sm:justify-evenly xs:justify-evenly  ">
        <NavLink to={"/"}>
        <div className=" relative group  w-full">
        <i className="cursor-pointer p-2 rounded-full hover:bg-gray-600 hover:text-white fa-solid fa-home"></i>
            <span class="absolute -top-8 left-[-7px] w-auto rounded-2xl h-auto hidden p-2 group-hover:block bg-indigo-200 text-xs  text-black">
             Home
            </span>
            </div>
          
        </NavLink>
        <NavLink to={'/appointement'}>
          <i className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-full fa-solid fa-paper-plane"></i>
        </NavLink>
        <NavLink to={'/appointement'}>
          <i className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-full fa-solid fa-wallet"></i>
        </NavLink>
        <NavLink to={'/favourite'}>
          <i className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-full fa-solid fa-heart"></i>
        </NavLink>
      </div>
    </div>
  );
};
export default VerticalNav;
