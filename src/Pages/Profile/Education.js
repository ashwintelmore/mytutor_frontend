import React from "react";



function Education({ show, setShow }) {
  if (!show)
    return null;
  return (
    <div className="flex w-full items-center justify-center xs:flex-col">
      <div className=" bg-[#fff] w-4/6 h-auto p-1 rounded-3xl flex flex-col items-center justify-center  shadow-md shadow-black xs:flex-col xs:w-11/12">
        <h2 className="text-[#f48c2b]">Education</h2>
        <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex   w-2/5  p-4 justify-around xs:w-full  ">
            <label className="w-1/5 text-lg xs:text-base ">Title</label> <input className="  rounded-xl w-full  shadow-sm shadow-black" type="text" />
          </div>{" "}
          <div className="flex   w-1/2   p-4  xs:w-full ">
            <label className="w-1/2 text-lg xs:text-sm xs:w-3/5 ">Organization name</label> <input className="  rounded-xl w-9/12 xs:w-4/5 xs:p-2  shadow-sm shadow-black" type="text" />
          </div>{" "}
        </div>
        <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex   w-2/5  p-4 justify-around xs:w-full  ">
            <label className="w-1/5 text-lg ">From</label> <input className="  rounded-xl w-full  shadow-sm shadow-black" type="text" />
          </div>{" "}
          <div className="flex   w-1/2  p-4 xs:w-full">
            <label className="w-1/2 text-lg xs:w-1/4">Location</label> <input className="  rounded-xl w-9/12   shadow-sm shadow-black" type="text" />
          </div>{" "}
        </div>
        <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
          <div className="flex xs:w-full  w-2/5 p-4 justify-around  ">
            <label className="w-1/5 text-lg ">To</label> <input className="  rounded-xl w-full  shadow-sm shadow-black" type="text" />
          </div>{" "}
          <div className="flex xs:w-full  w-1/2   p-4 ">
            <label className="w-1/2 text-lg xs:w-1/3 ">Something</label> <input className="  rounded-xl w-9/12   shadow-sm shadow-black" type="text" />
          </div>{" "}
        </div>
        <div className="p-2">
          <h2>Description :</h2>
          <textarea rows={5} cols={50} className="rounded-2xl xs:h-24 xs:w-11/12 shadow-sm shadow-black"></textarea>
        </div>
        <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-2/5 justify-between"><button className="xs:w-2/5 bg-[#F8AF6A] rounded-xl p-2 w-2/5" >Add</button> <button className=" xs:w-2/5 bg-[#F8AF6A] rounded-xl p-2 w-2/5">Cancel</button></div>
      </div>
    </div>
  );
}

export default Education;
