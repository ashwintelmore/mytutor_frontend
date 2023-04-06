import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import Backrop from "./Backrop";
import Education from "../Pages/Profile/Education";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Header = () => {
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

  const [openEducation, setOpenEducation] = useState(false);
  let EducationRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!EducationRef.current.contains(e.target)) {
        setOpenEducation(false);
      }
    };
    document.addEventListener("mouseup", handler);
    return () => {
      document.removeEventListener("mouseup", handler);
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
      <div className="flex w-full bg-indigo-100 sticky top-0 z-10 dark:bg-zinc-900 dark:text-white  justify-between p-2 h-16 xs:z-10">
        <div className="flex items-center gap-9 p-2 text-lg xs:gap-4  xs:w-full ">
          <div>
            <i
              className="fa-solid fa-bars cursor-pointer  "
              onClick={toggleSidebar}
            ></i>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          </div>

          <span className="mytutor">MyTutor</span>
          <div className="mx-2 relative bg-white dark:bg-white dark:text-black text-sm  flex   w-96  items-center rounded-2xl xs:w-60 ">
            <input type="text" placeholder="search" className="w-full p-1  rounded-2xl outline-none"></input>
            <i className="fa-solid fa-magnifying-glass absolute right-0 p-2"></i>
          </div>
        </div>

        <div className="flex justify-between items-center gap-7 p-3 text-lg  xs:hidden md:hidden ">
          <i
            className="fa-regular fa-moon cursor-pointer"
            onClick={handleThemeSwitch}
          ></i>

          <i className="fa-solid fa-circle-plus" ref={EducationRef}
            onClick={() => setOpenEducation((prev) => !prev)}> {openEducation && <Education />}</i>
          <i className="fa-solid fa-bell"></i>
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
                  <span>User Name</span>
                </div>
                :
                <Link to={'/login'}>
                  <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid">
                    Register/Login
                  </button>
                </Link>

            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
