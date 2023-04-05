import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import Backrop from "./Backrop";
import Education from "./Education";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
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
          <div className="mx-2 bg-white dark:bg-white dark:text-black text-sm  flex  p-1 w-96 justify-between items-center rounded-full xs:w-60 ">
            <h4>Search</h4>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="flex justify-between items-center gap-7 p-3 text-lg  xs:hidden ">
          <i
            className="fa-regular fa-moon cursor-pointer"
            onClick={handleThemeSwitch}
          ></i>

          <i className="fa-solid fa-circle-plus"  ref={EducationRef}
            onClick={() => setOpenEducation((prev) => !prev)}> {openEducation && <Education/>}</i>
          <i className="fa-solid fa-bell"></i>
          <div
            className=" flex justify-between items-center gap-2 cursor-pointer "
            ref={menuRef}
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <img
              className="rounded-full h-11 w-11"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            {openProfile && <Backrop />}
            <span>Ashwin Telmore</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
