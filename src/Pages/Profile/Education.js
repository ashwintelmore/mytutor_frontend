import React from "react";

function Education() {
  return (
    <div className=" education  flex flex-col justify-center ">
      <h2>Education</h2>
      <div className="flex p-2 gap-4 m-2  w-full text-sm ">
        <div className="flex gap-1 w-1/2 items-center">
          <label>title</label> <input className="p-2 rounded-2xl w-11/12" type="text" />
        </div>{" "}
        <div className="flex items-center gap-2 w-1/2">
          <label>Organization name</label> <input className="p-2 rounded-2xl w-11/12" type="text" />
        </div>{" "}
      </div>
      <div className="flex p-2 gap-4 m-2  w-full text-sm ">
        <div className="flex gap-1 w-1/2 items-center">
          <label>From</label> <input className="p-2 rounded-2xl w-11/12" type="text" />
        </div>{" "}
        <div className="flex w-1/2 items-center gap-2">
          <label>To</label> <input className="p-2 rounded-2xl w-11/12" type="text" />
        </div>{" "}
      </div>
      <div className="flex p-2 gap-4 m-2  w-full text-sm ">
        <div className="flex gap-1 w-1/2 items-center">
          <label>Location</label> <input className="p-2 rounded-2xl  w-11/12" type="text" />
        </div>{" "}
        <div className="flex w-1/2 items-center gap-2">
          <label>Something</label> <input className="p-2 rounded-2xl  w-11/12" type="text" />
        </div>{" "}
      </div>
      <div className="flex text-sm"><label>Description</label> <textarea rows={6} cols={20}/></div>
      <button className="w-20 h-10 bg-orange-300 right-0 absolute bottom-0 ">Add</button>
    </div>
  );
}

export default Education;
