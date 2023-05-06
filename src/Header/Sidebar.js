import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddPost from "../Pages/Posts/AddPost";
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

  console.log('open', open)


  return (
    <>

      {
        open
        &&
        <div className={open ? "sidebar collapse" : "sidebar"}>
          <div className="flex justify-between items-center p-1">
            <h2 className="text-2xl ">My Tutor</h2>
            <i
              className="fa-solid fa-xmark cursor-pointer  text-2xl rounded-full"

            ></i>
          </div>
          <div className="flex flex-col gap-3 list-none p-2">
            <div className="flex gap-2 items-center  " onClick={handleThemeSwitch}>
              <i className="fa-solid fa-moon cursor-pointer"> </i>
              <label>Dark Mode</label>
            </div>
            {/* <div className="flex gap-2 items-center">
          <i className="fa-solid fa-bell"> </i>
          <label>Notifications</label>
        </div> */}
            {/* <div className="flex gap-2 items-center "

          >
            <i className="fa-solid fa-circle-plus"
            ></i>
            <label>Upload</label>
          </div> */}

            {/* <div className="flex gap-2 items-center">
          <i className="fa-solid fa-gear gap-2"> </i>
          <label>Setting</label>
        </div> */}
          </div>
          <Link to={"/profile"} >  <div className="flex bottom-2 absolute items-center gap-5">
            <img
              className="rounded-full h-14 w-14"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            {/* <label>{useAuth().user.name}</label> */}
          </div>
          </Link>

        </div>
      }

    </>
  );
};

export default Sidebar;
