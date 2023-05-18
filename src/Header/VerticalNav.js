import React from "react";
import Calender from "../Components/Calender";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);



  return (
    <div className=" fixed left-0 footer w-16 h-screen transition-all duration-500 ease-in-out  bg-color-3 sm:border-t-[.5px] text-lg flex flex-col dark:bg-color-2 dark:text-white xs:bg-orange-100 xs:h-[5%] xs:p-1 xs:fixed  xs:bottom-0 sm:z-[5]  sm:h-[8%] sm:text-2xl sm:p-1 sm:fixed  sm:bottom-0 sm:w-full   ">
      <div className="flex flex-col items-center p-8 gap-10 sm:flex  xs:flex sm:p-2 xs:p-2 sm:gap2 xs:gap-2 sm:flex-row xs:flex-row  sm:items-center xs:items-center  sm:justify-evenly xs:justify-evenly  ">
        <NavLink to={"/"}>

          <i title="Home" className="cursor-pointer p-2 rounded-full hover:bg-color-14 transition-all duration-500 ease-in-out  hover:text-white fa-solid fa-home"></i>


        </NavLink>
        <NavLink to={'/appointement'}>

          <i className="cursor-pointer p-2 hover:bg-color-14 transition-all duration-500 ease-in-out  hover:text-white rounded-full fa-solid fa-paper-plane" title="Your Appointments"></i>

        </NavLink>


        {/* <NavLink to={'/appointement'}>
          <i className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-full fa-solid fa-wallet"></i>
        </NavLink> */}
        <NavLink to={'/favourite'}>

          <i className="cursor-pointer p-2 hover:bg-color-14 transition-all duration-500 ease-in-out  hover:text-white rounded-full fa-solid fa-heart" title="Likes"></i>


        </NavLink>
      </div>
    </div>
  );
};
export default VerticalNav;
