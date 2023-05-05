import React from "react";
import Calender from "../Components/Calender";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);



  return (
    <div className=" fixed left-0 footer w-16 h-screen  bg-[#EAF0FF] text-lg flex flex-col dark:bg-zinc-900 dark:text-yellow-300 xs:bg-orange-100 xs:h-[5%] xs:p-1 xs:fixed  xs:bottom-0 sm:z-[5]  sm:h-[8%] sm:text-2xl sm:p-1 sm:fixed  sm:bottom-0 sm:w-full   ">
      <div className="flex flex-col items-center p-8 gap-10 sm:flex  xs:flex sm:p-2 xs:p-2 sm:gap2 xs:gap-2 sm:flex-row xs:flex-row  sm:items-center xs:items-center  sm:justify-evenly xs:justify-evenly  ">
        <NavLink to={"/"}>
          <i className="cursor-pointer p-2 rounded-full fa-solid fa-home"></i>
        </NavLink>
        <NavLink to={'/appointement'}>
          <i className="cursor-pointer p-2 rounded-full fa-solid fa-paper-plane"></i>
        </NavLink>
        <i className=" fa-sharp fa-solid fa-gear"></i>
      </div>
    </div>
  );
};
export default VerticalNav;
