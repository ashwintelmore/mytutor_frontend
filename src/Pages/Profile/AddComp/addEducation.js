import React, { useState, useEffect } from "react";
import { useAuth } from "../../../providers/auth";



function Education({ show, setShow, }) {
  const auth = useAuth()
  const [userData, setUserData] = useState({
    title: '',
    orginization: '',
    location: '',
    descrp: '',
    from: '',
    to: ''
  })
  const onAddDetails = () => {
    if (!auth.user._id)
      return
    let edcs = [...auth.user.education];
    edcs.push(userData)
    auth.setUser({
      ...auth.user,
      education: edcs
    })
    setShow(!show)
    setUserData({
      title: '',
      orginization: '',
      location: '',
      descrp: '',
      from: '',
      to: ''
    })
  };

  const onCancelBtn = () => {
    setShow(!show)
  };


  if (!show)
    return null;
  return (
    <div className="flex w-full  items-center justify-center xs:flex-col absolute top-4 left-0 ">
      <div className=" bg-[#fff] relative w-4/6 h-auto p-3 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12 sm:w-[95%] ">
        <div className="flex w-full">
        <h2 className="text-[#f48c2b] text-xl font-bold px-3  ">Education</h2></div>

        <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full sm:flex-col sm:w-full">
          <div className="flex flex-col relative  w-[45%] p-2  xs:w-full sm:w-full">
            <label className="w-full p-2 text-base xs:text-base">Name of Education</label>
            <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
              name="title"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              value={userData.title}
            />
            <p className="text-xs ml-2 p-1">Write something</p>
          </div>
          <div className="flex flex-col   w-[45%] p-2 xs:w-full sm:w-full">
            <label className="w-full p-2 text-base xs:text-base">School/College/University</label>
            <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
              name="orginization"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              value={userData.orginization}
            />
            <p className="text-xs ml-2 p-1">Write something</p>
          </div>
        </div>

        <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full sm:flex-col sm:w-full">
          <div className="flex flex-col   w-[45%]  p-2  xs:w-full sm:w-full  ">
            <label className="w-full text-base p-2 ">From</label>
            <input className="  rounded-xl w-full  p-2 shadow-sm shadow-black" type="date"
              name="from"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              value={userData.from}
            />
            <p className="text-xs ml-2 p-1">Write something</p>
          </div>
          <div className="flex flex-col  xs:w-full  w-[45%] p-2 justify-around sm:w-full ">
            <label className="w-full text-base p-2">To</label>
            <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="date"
              name="to"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              value={userData.date}
            />
            <p className="text-xs ml-2 p-1">Write something</p>
          </div>
        </div>

        <div className="flex p-1    w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full sm:w-full">
         

          <div className="flex  flex-col  w-[45%]  p-2 xs:w-full sm:w-full">
            <label className="w-full p-2 text-base xs:w-1/4">Location</label>
            <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="text"
              name="location"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              value={userData.location}

            />
            <p className="text-xs ml-2 p-1">Write something</p>
          </div>
        </div>

        <div className="p-1">
          <h2>Description :</h2>
          <textarea rows={5} cols={100} className="rounded-2xl px-2 py-1 xs:h-24 w-4/5 xs:w-11/12 shadow-sm shadow-black sm:w-full"
            name="descrp"
            onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
            value={userData.descrp}
          ></textarea>
        </div>

        <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end sm:w-full sm:justify-end ">
          <button className="xs:w-2/5 sm:w-[30%] bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

            onClick={() => onAddDetails()}
          >Add
          </button>
          <button className=" xs:w-2/5 sm:w-[30%] bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"
            onClick={() => setShow(!show)}
          >Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education;
