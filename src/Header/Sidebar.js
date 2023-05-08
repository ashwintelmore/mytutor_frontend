import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddPost from "../Pages/Posts/AddPost";
import { useAuth } from "../providers/auth";


const Sidebar = ({open }) => {
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




  return (
    <>
      <div className={`sidebar z-[8] w-[330px] h-screen bg-slate-400  rounded-r-3xl left-0 top-0 fixed transition-all ease-in-out delay-100 ${open ?"sidebar-open translate-x-[0%]":"sidebar-close -translate-x-full"}`}>
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
          <div className="flex gap-2 items-center  " onClick={handleThemeSwitch}>
            <i className="fa-solid fa-moon cursor-pointer"> </i>
            <label>Dark Mode</label>
          </div>
          
        </div>
        <div className="flex flex-col gap-3 absolute bottom-0 w-full ">
          <div className="flex w-full gap-3 p-1 flex-wrap">
          <label>About</label>
          <label>Copyright</label>
          <label>Contact us</label>
          <label>Creaters</label>
          <label>Developers</label></div>
          <div className="flex w-full gap-3 p-1 flex-wrap">
          <label>Terms</label>
          <label>Privacy</label>
          <label>Policy & Safety</label>
          <label>How to use MyTutor</label>
          <label>New features</label></div>
          <div className="p-2"><i class="fa-regular fa-copyright"></i> <label>2023 MyTutor LLC</label></div>
        </div>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
