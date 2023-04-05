import React from "react";
import Calender from "./Calender";
import { useState } from "react";
import { Link } from "react-router-dom";

const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className=" footer w-16 bg-indigo-100 text-lg flex flex-col dark:bg-zinc-900 dark:text-yellow-300 xs:bg-orange-100 xs:h-14 xs:p-1     ">
     <div className="flex flex-col items-center p-8 gap-10   xs:flex xs:p-2 xs:gap-2 xs:flex-row  xs:items-center  xs:justify-evenly  ">
     <Link to={"/"}>  <i className=" bg-slate-400 cursor-pointer dark:bg-slate-700 p-2 rounded-full fa-solid fa-house house"></i></Link>
        <i className=" fa-solid fa-comment"></i>
        <div>
          <i
            className=" fa-solid fa-calendar-days cursor-pointer"
            onClick={toggleSidebar}
          ></i>
          <Calender isOpen={isOpen} toggle={toggleSidebar} />
        </div>

        <i className=" fa-sharp fa-solid fa-gear"></i>
      </div>
    </div>
  );
};
export default VerticalNav;
