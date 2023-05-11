import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Backrop = () => {
  const auth = useAuth()

  const logout = () => {
    localStorage.removeItem('_id');
    auth.setUser({})
  };

  return (

    <div className="flex flex-col absolute  top-[4.5rem] z-[1] right-4 w-[300px] h-auto p-4 rounded-2xl border-slate-400 border-2  bg-slate-100 dark:bg-zinc-900 dark:border-white">
      <Link to={"/profile"}>
        <div className="flex w-full justify-around items-center">
          <div className="w-[30%] p-1">
          <div className="rounded-full relative h-12 w-12 bg-orange-400">
        <div className="absolute right-3 p-2 text-white text-transform: uppercase"> {auth.user.name[0]}</div></div></div> 
          <div className="flex cursor-pointer w-[70%] flex-col text-sm font-semibold">
            <label className="cursor-pointer">{auth.user.name}</label>
            <label className="cursor-pointer">{auth.user.email}</label>
          </div>
        </div>
      </Link>

      <ul className="flex flex-col gap-4 m-4   justify-center ">

        <Link to={"/profile"}>
          <li className="flex  items-center gap-7">
            <i className="fa-solid fa-pen-to-square"></i>
            <label className="cursor-pointer">Edit profile </label>
          </li>
        </Link>
        <li className="flex  items-center gap-7">
          <i className="fa-solid fa-gear"></i> <label className="cursor-pointer">Setting </label>
        </li>
        <li className="flex  items-center gap-7"
          onClick={() => logout()}
        >
          <i className="fa-solid  fa-right-to-bracket"></i>
          <label className="cursor-pointer"

          >Logout </label>
        </li>
      </ul>
    </div>


  );
}

export default Backrop;
