import React, { useState, useEffect } from "react";
import { useAuth } from "../../../providers/auth";



function AddWorkExpe({ show, setShow, }) {
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
        let edcs = [...auth.user.workExperience];
        edcs.push(userData)
        auth.setUser({
            ...auth.user,
            workExperience: edcs
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

    const onHandleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    };
    const onCancelBtn = () => {
        setShow(!show)
    };


    if (!show)
        return null;
    return (
        <div className="flex w-full  items-center justify-center xs:flex-col absolute top-4 left-0">
            <div className=" bg-[#fff] relative w-4/6 h-auto p-3 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12">
                <div className="flex w-full px-3 font-bold text-xl">
                <h2 className="text-[#f48c2b] ">Add Work Experience</h2>
                </div>
                <div className="flex p-1   w-full justify-between items-center text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Name of Education</label>
                        <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
                            name="title"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.title}
                        />
                        <p className="text-xs ml-2 p-1">Write something</p>
                    </div>
                    <div className="flex flex-col   w-[45%] p-2 xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">School/College/University</label>
                        <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
                            name="orginization"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.orginization}
                        />
                        <p className="text-xs ml-2 p-1">Write something</p>
                    </div>
                </div>

                <div className="flex p-1  items-center  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col   w-[45%]  p-2  xs:w-full  ">
                        <label className="w-full text-base p-2 ">From</label>
                        <input className="  rounded-xl w-full  p-2 shadow-sm shadow-black" type="date"
                            name="from"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.from}
                        />
                        <p className="text-xs ml-2 p-1">Write something</p>
                    </div>
                    <div className="flex flex-col  xs:w-full  w-[45%] p-2 justify-around  ">
                        <label className="w-full text-base p-2">To</label>
                        <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="date"
                            name="to"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.date}
                        />
                        <p className="text-xs ml-2 p-1">Write something</p>
                    </div>
                    
                </div>

                <div className="flex p-1    w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                  <div className="flex  flex-col  w-[45%]  p-2 xs:w-full">
                        <label className="w-full p-2 text-base xs:w-1/4">Location</label>
                        <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="text"
                            name="location"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.location}

                        />
                        <p className="text-xs ml-2 p-1">Write something</p>
                    </div>
                </div>

                <div className="py-2">
                    <h2 className="py-2">Description :</h2>
                    <textarea rows={5} cols={100} className="rounded-2xl  px-2 xs:h-24 w-4/5 xs:w-11/12 shadow-sm shadow-black"
                        name="descrp"
                        onChange={(e) => onHandleChange(e)}
                        value={userData.descrp}
                    ></textarea>
                </div>

                <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end">
                    <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                        onClick={() => onAddDetails()}
                    >Add
                    </button>
                    <button className=" xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"
                        onClick={() => setShow(!show)}
                    >Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddWorkExpe;
