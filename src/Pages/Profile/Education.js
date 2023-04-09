import React from "react";



function Education({ show, setShow }) {
  if (!show)
    return null;
  return (

    <div className="flex w-full items-center justify-center xs:flex-col absolute top-1/2 left-0 ">
      <div className=" bg-[#98cfe9] w-4/6 h-auto p-1 rounded-3xl flex flex-col items-center justify-center  shadow-md shadow-black xs:flex-col xs:w-11/12">
        <h2>Education</h2>
        <div className="flex p-2 gap-1  w-full text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex xs:w-full">
          <div className="flex flex-col gap-1 w-1/2  ">
            <label>Title</label> <input className="p-2 rounded-2xl w-11/12  shadow-sm shadow-black" type="text" />
          </div>{" "}
          <div className="flex flex-col gap-2 w-1/2 ">
            <label>Organization name</label> <input className="p-2 shadow-sm shadow-black rounded-2xl w-11/12" type="text" />
          </div>{" "}
        </div>
        <div className="flex p-2 gap-1   w-full text-sm xs:p-1 xs:text-xs xs:gap-0 xs:flex xs:items-center xs:w-full">
          <div className="flex flex-col gap-1 w-1/2 ">
            <label>From</label> <input className="p-2 shadow-sm shadow-black rounded-2xl w-11/12" type="text" />
          </div>{" "}
          <div className="flex flex-col gap-2 w-1/2">
            <label>To</label> <input className="p-2 shadow-sm shadow-black rounded-2xl w-11/12" type="text" />
          </div>{" "}
        </div>
        <div className="flex p-2 gap-1   w-full text-sm xs:p-1 xs:text-xs xs:gap-0 xs:flex xs:w-full">
          <div className="flex flex-col gap-1 w-1/2 ">
            <label>Location</label> <input className="p-2 shadow-sm shadow-black rounded-2xl w-11/12" type="text" />
          </div>{" "}
          <div className="flex flex-col gap-2 w-1/2">
            <label>Something</label> <input className="p-2 shadow-sm shadow-black rounded-2xl w-11/12" type="text" />
          </div>{" "}
        </div>
        <div>
          <h2>Description :</h2>
          <textarea rows={7} cols={40} className="rounded-2xl xs:h-24 xs:w-11/12 shadow-sm shadow-black"></textarea>
        </div>
        <div className="flex xs:w-full xs:justify-evenly gap-2 w-2/5 justify-between">
          <button className="xs:w-2/5 bg-orange-400 rounded-xl p-2 w-2/5"
            onClick={() => setShow(!show)}
          >Add</button>
          <button className=" xs:w-2/5 bg-orange-400 rounded-xl p-2 w-2/5"
            onClick={() => setShow(!show)}
          >Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Education;
