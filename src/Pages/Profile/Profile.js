import React, { useState } from "react";

import About from "./About";
import AllPost from "./AllPost";

const Profile = () => {
  const [show, setShow] = useState('1')

  const change = () => {

  };
  return (
    <div className="flex w-full ml-16 h-screen rounded-t-3xl bg-white dark:bg-slate-800 dark:text-white xs:flex-col   xs:h-full " >
      <div className="w-1/4 flex flex-col h-auto items-center p-1 gap-6 mt-5 overflow-y-hidden  rounded-tl-3xl xs:w-full   ">
        <h3 className="text-lg font-semibold text-[#FF0000]">Profile Photo</h3>
        <div className="h-28 w-28 rounded-full bg-[#FF0000]  relative ">
          <img
            className="rounded-full h-28 w-28 p-1"
            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
            alt=""
          />
          <i className="fa-solid fa-user-pen absolute bottom-2 h-8 w-8 bg-slate-50 rounded-full p-2 right-0 "></i>
        </div>
        <div className="flex-col flex items-center text-lg  ">
          <label className="text-[#1A0970]">UserName</label>
          <label className="text-sm">Teacher</label>
        </div>

        <div className="flex gap-12 text-lg">
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">17</label>
            <label className="text-sm">Lectures</label>
          </div>
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">1.2k</label>
            <label className="text-sm">Hours</label>
          </div>
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">10</label>
            <label className="text-sm">Learners </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-lg p-1">
          <label className="text-[#1A0970]">Bio</label>
          <p className="text-sm p-1 ">
            I am passionate about developing web apps | Clean maintainable and
            scalable code | FrontEnd Performance Matters a LotCurrently getting
            hands on Mobile native and React native development I write here
            https://dev.to/ashwintelmore
          </p>
        </div>
        <div className="text-lg w-11/12 gap-3 flex flex-col">
          <h3 className="text-[#1A0970]">Something Heading</h3>
          <div className="flex flex-col gap-10">
            <div className="flex  relative border border-gray-500 shadow-slate-400 shadow-md text-sm   rounded-xl p-1  ">
              <input
                type="text"
                placeholder="Write something"
                className="rounded-lg  w-full  outline-none "></input>


              <button className="absolute rounded-xl text-xs  h-5 w-16  text-white right-1   bg-orange-500">Send OTP</button>
              <h6 className="text-xs left-2 absolute -bottom-5 ">Something content</h6>
            </div>

            <div className="flex items-center relative border border-gray-500 shadow-slate-400 shadow-md text-sm rounded-xl p-1  ">
              <input
                type="text"
                placeholder="Write something"
                className="rounded-lg w-full outline-none px-2 py-1 "></input>


              <button className="absolute rounded-xl text-xs p-4 h-5 w-16 text-white right-1   bg-orange-500">Verify</button>
              <h6 className="text-xs left-2 absolute -bottom-5 ">Something content</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 flex-col flex overflow-y-auto xs:w-full xs:relative   ">
        <div className="flex top-0 sticky bg-white p-2 gap-4 mt-1  ">

          <button className="rounded-2xl bg-[#EAF0FF] text-sm w-24 h-8 shadow-md shadow-slate-500 "
            onClick={() => setShow('1')}
          >
            About
          </button>
          <button className="rounded-2xl bg-[#EAF0FF] text-sm w-24 h-8 shadow-md shadow-slate-500"
            onClick={() => setShow('2')}
          >
            All Post
          </button>

        </div>
        {/* ccalender and about */}
        <div className=" xs:overflow-y-auto " >
          {
            show === '1' ?
              <About />
              :
              <AllPost />

          }
        </div>
      </div>
    </div>

  );
};

export default Profile;
