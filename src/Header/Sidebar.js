import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import AddPost from "../Pages/Posts/AddPost";
import { useAuth } from "../providers/auth";


const Sidebar = ({ open }) => {
  const [show, setShow] = useState(false)
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


  // console.log(isOpen)
  return (
    <>
      <div className={`sidebar sm:z-[11] border-color-8 border-[1px] sm:mt-2 z-[11] dark:bg-color-11  dark:text-white dark:border w-[330px] sm:w-[270px] h-screen bg-white  rounded-r-3xl left-0 top-0 fixed transition-transform ease-in-out duration-500 ${open ? "sidebar-open translate-x-[0%]" : "sidebar-close -translate-x-full"}`}>
        <div className="flex w-full flex-col p-2">
          <Link to={"/profile"} >  <div className="flex p-2 w-full items-center gap-5">
            <img
              className="rounded-full h-14 w-14"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            <label>{useAuth().user.name}</label>
          </div>
          </Link>
          <div className="flex justify-between items-center p-1">
            <h2 className="text-2xl ">My Tutor</h2>

          </div>
          <div className="flex flex-col gap-3 list-none p-2">
            <div className="flex gap-2 items-center  shadow-sm shadow-color-8 py-2 px-3 hover:bg-color-8 transition-all duration-500 ease-in-out hover:text-white  rounded-2xl " onClick={handleThemeSwitch}>
              <i className="fa-solid fa-moon cursor-pointer"> </i>
              <label>Dark Mode</label>
            </div>

          </div>
          <div className="flex flex-col gap-3 absolute bottom-0 w-full ">
            <div className="flex w-full text-sm gap-1  px-3 flex-wrap">
          <Link to={"/aboutus"} >    <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">About Us</label></Link>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">Copyright</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">Contact us</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">Creaters</label>
              <label className="px-2 hover:underline  transition-all duration-300 ease-in-out hover:text-color-9">Developers</label></div>
            <div className="flex w-full text-sm gap-1 px-3 flex-wrap">
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">Terms</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">Privacy</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9 ">Policy & Safety</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9 ">How to use MyTutor</label>
              <label className="px-2 hover:underline transition-all duration-300 ease-in-out hover:text-color-9">New features</label></div>
            <div className="px-4 py-2"><i className="fa-regular fa-copyright"></i> <label>2023 MyTutor LLC</label></div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Sidebar;
