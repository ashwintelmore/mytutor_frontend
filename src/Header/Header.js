import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import Backrop from "./Backrop";

import { Link } from "react-router-dom";
import { useAuth } from "../providers/auth";
import AddPost from "../Pages/Posts/AddPost";

const Header = () => {
  const [show, setShow] = useState(false)
  const [openProfile, setOpenProfile] = useState(false);
  const auth = useAuth()
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className="flex justify-between sm:w-full bg-[#EAF0FF] sticky top-0 z-20 dark:bg-zinc-900 dark:text-white  justify-between p-2 h-16 xs:z-10">
        <div className="flex items-center gap-9 p-2 text-lg xs:gap-4   ">
          <div>
            <i
              className="fa-solid fa-bars cursor-pointer"
              onClick={toggleSidebar}
            ></i>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          </div>

          <span className="mytutor">MyTutor</span>
         
        </div>

        <div className="flex justify-between  items-center gap-10 p-3 text-xl   ">
        
             
             <Link to={'/search'}>
               <i className="fa-solid fa-magnifying-glass  "></i>
             </Link>
           
          
          <i
            className="fa-regular fa-moon cursor-pointer xs:hidden sm:hidden "
            onClick={handleThemeSwitch}
          ></i>
          <i className="fa-solid fa-circle-plus"
            onClick={() => setShow(true)}
          >
          </i>
          <i className="fa-solid fa-bell xs:hidden sm:hidden"></i>
          <div
            className=" flex justify-between items-center gap-2 cursor-pointer "
            ref={menuRef}
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            {
              auth.user._id ?
                <div className="flex gap-2">
                  <img
                    className="rounded-full h-11 w-11"
                    src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                    alt=""
                  />
                  {openProfile && <Backrop />}
                  <span> {auth.user.name} </span>
                </div>
                :
                <Link to={'/login'}>
                  <button className="bg-[#F8AF6A] text-white rounded-lg px-3 py-1 text-base dark:bg-zinc-900 dark:border-white dark:border-solid">
                    Register/Login
                  </button>
                </Link>

            }
          </div>
        </div>

      </div>
      <AddPost
        show={show}
        setShow={() => setShow(!show)}
      />
    </>
  );
};


export default Header;
