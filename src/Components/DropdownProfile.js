import React from "react";

function DropdownProfile() {
  return (
    <div className="flex flex-col dropdownprofile dark:bg-zinc-900 dark:border-white" >
      <div className="flex justify-around items-center">
        <img
          className="rounded-full h-14 w-14 "
          src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
          alt=""
        />
        <div className="flex flex-col text-sm font-semibold">
          <label>Ashwin Telmore</label>
          <label>ashwintelmore@gmail.com</label>
        </div>
      </div>

      <ul className="flex flex-col gap-4 m-4   justify-center ">
        <li className="flex items-center gap-7  " ><i class="fa-solid fa-user"></i> <label> Profile </label></li>
        <li className="flex items-center gap-7"><i class="fa-solid fa-pen-to-square"></i>  <label>Edit profile </label></li>
        <li className="flex items-center gap-7"> <i class="fa-solid fa-gear"></i>  <label>Setting </label></li>
        <li className="flex items-center gap-7"> <i class="fa-solid fa-right-to-bracket"></i> <label>Sign out </label></li>
      </ul>
    </div>
  );
}

export default DropdownProfile;
