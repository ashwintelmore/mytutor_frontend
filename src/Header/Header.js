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

          <div className=" relative group  w-full">
            <i
              className="fa-solid fa-bars hover:bg-gray-600 hover:text-white rounded-full p-2 cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}></i>
            <span class="absolute  -left-[14px] w-auto rounded-xl h-auto hidden px-4 py-1 group-hover:block bg-indigo-200 text-xs  text-black">
              Menu
            </span>
          </div>

          <Link to={"/"}>
            <span className="mytutor ">MyTutor</span>
          </Link>


        </div>

        <div className="flex justify-between  items-center gap-10 sm:gap-2 p-3 text-xl   ">
          <NavLink to={"/search"}>
            <div className=" relative group w-full">
              <i className="cursor-pointer p-2  rounded-full fa-solid fa-magnifying-glass relative hover:bg-gray-600 hover:text-white"></i>
              <span class="absolute -bottom-7 -right-[15px] px-4 py-1 w-auto text-xs rounded-xl h-auto hidden  group-hover:block  bg-indigo-200  text-black">
                Search
              </span>
            </div>
          </NavLink>
          <div className=" relative group  w-full">
            <i
              className="fa-regular fa-moon cursor-pointer hover:bg-gray-600 hover:text-white rounded-full p-2 xs:hidden sm:hidden   "
              onClick={handleThemeSwitch}></i>
            <span class="absolute  -left-[20px] w-fit  rounded-xl h-auto  hidden px-4 py-px  group-hover:block bg-indigo-200 text-xs  text-black">
              Dark/Light Mode
            </span>
          </div>
          <div className=" relative group  w-full">
            <i
              className="fa-solid fa-circle-plus cursor-pointer hover:bg-gray-600 hover:text-white p-2 rounded-full"
              onClick={() => setShow(true)}></i>
            <span class="absolute  left-[-10px] w-auto rounded-xl h-auto hidden px-2 py-1 group-hover:block bg-indigo-200 text-xs  text-black">
              Upload
            </span>
          </div>


          {/* <i className="fa-solid fa-bell xs:hidden sm:hidden"></i> */}
          <div
            className=" flex justify-between items-center gap-2 cursor-pointer "
            ref={menuRef}
            onClick={() => setOpenProfile((prev) => !prev)}>
            {auth.user._id ? (

              <div className=" relative group  w-full">
                <div className="flex items-center gap-2">
                  <span className="rounded-full h-11 w-11 p-1 relative bg-[#d0782f]">
                    <div className="absolute right-4  text-white text-transform: uppercase"> {auth.user.name[0]}</div>
                  </span>
                  {openProfile && <Backrop />}
                  <span> {auth.user.name} </span>
                </div>
                <span class="absolute -top-2 left-[-50px] text-base w-auto rounded-2xl h-auto hidden p-2 group-hover:block bg-indigo-200 text-xs  text-black">
                  Profile
                </span>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="bg-[#F8AF6A] text-white rounded-lg px-3 py-1 sm:text-sm sm:px-2 text-base dark:border dark:bg-zinc-900 dark:border-white dark:border-solid">
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
