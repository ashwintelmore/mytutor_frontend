import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import Backrop from "./Backrop";

import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../providers/auth";
import AddPost from "../Pages/Posts/AddPost";

const Header = ({ setOpen, open }) => {
  const [show, setShow] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const auth = useAuth();
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // console.log('isOpen', isOpen)

  return (
    <>
      <div className="flex  sm:w-full bg-[#EAF0FF] fixed w-full top-0 z-[11] dark:bg-zinc-900 dark:text-white  justify-between p-2 h-16 xs:z-11">
        <div className="flex items-center gap-9 p-2 text-lg xs:gap-4   ">

       
            <i
              title="Menu" className="fa-solid fa-bars hover:bg-gray-600 hover:text-white rounded-full p-2 cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}></i>
            

          <Link to={"/"}>
            <span className="mytutor ">MyTutor</span>
          </Link>


        </div>

        <div className="flex justify-between  items-center gap-10 sm:gap-3 sm:p-[2px] sm:text-base p-3 text-xl   ">
          <NavLink to={"/search"}>
            
              <i className="cursor-pointer p-2 rounded-full fa-solid fa-magnifying-glass relative  hover:bg-gray-600 hover:text-white " title="Search"></i>
               
          
          </NavLink>
          
            <i
              className="fa-regular fa-moon cursor-pointer hover:bg-gray-600 hover:text-white rounded-full p-2 xs:hidden sm:hidden   "
              onClick={handleThemeSwitch} title="Dark/Light mode"></i>
            
         
            <i
              className="fa-solid fa-circle-plus cursor-pointer hover:bg-gray-600 hover:text-white p-2 rounded-full  " title="upload"
              onClick={() => setShow(true)}></i>
       


          {/* <i className="fa-solid fa-bell xs:hidden sm:hidden"></i> */}
          <div
            className=" flex justify-between items-center gap-2 cursor-pointer "
            ref={menuRef}
            onClick={() => setOpenProfile((prev) => !prev)}>
            {auth.user._id ? (

              
                <div title="Profile" className="flex  items-center gap-2">
                  <span className="rounded-full h-11 w-11 p-1 relative bg-[#d0782f]">
                    <div className="absolute right-4  text-white text-transform: uppercase"> {auth.user.name[0]}</div>
                  </span>
                  {openProfile && <Backrop />}
                  <span> {auth.user.name} </span>
                </div>
                 
            ) : (
              <Link to={"/login"}>
                <button className="bg-[#e58832] text-white dark:border dark:bg-gray-500 rounded-lg sm:px-2 sm:text-sm px-3 py-1 text-base dark:bg-zinc-900 dark:border-white dark:border-solid">
                  Register/Login
                </button>
              </Link>
            )}
          </div>
        </div>

        <AddPost
          show={show}
          setShow={() => setShow(!show)}
        />
      </div>
    </>
  );
};

export default Header;
