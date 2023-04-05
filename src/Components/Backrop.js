import React from "react";
import { Link } from "react-router-dom";

const Backrop = () => {
  return (
     
    <div className="flex flex-col dropdownprofile dark:bg-zinc-900 dark:border-white">
     <Link to={"/profile"}> <div className="flex justify-around items-center">
        <img
          className="rounded-full h-14 w-14"
          src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
          alt=""
        />
        <div className="flex flex-col text-sm font-semibold">
          <label>Ashwin Telmore</label>
          <label>ashwintelmore@gmail.com</label>
        </div>
      </div></Link> 

      <ul className="flex flex-col gap-4 m-4   justify-center ">
        <li className="flex items-center gap-7  ">
          <i className="fa-solid fa-user"></i> <label> Profile </label>
        </li>
        <Link to={"/profile"}>
          <li className="flex items-center gap-7">
            <i className="fa-solid fa-pen-to-square"></i>
            <label>Edit profile </label>
          </li>
        </Link>
        <li className="flex items-center gap-7">
          <i className="fa-solid fa-gear"></i> <label>Setting </label>
        </li>
        <li className="flex items-center gap-7">
          
          <i className="fa-solid fa-right-to-bracket"></i>
          <label>Sign out </label>
        </li>
      </ul>
    </div>
 
   
  );
}

export default Backrop;
