import React, { useState, useEffect } from "react";
import { useAuth } from "../../../providers/auth";



function UpdateEducation({ show, setShow, data, setData }) {
    const auth = useAuth()
    const [userData, setUserData] = useState({
        title: '',
        orginization: '',
        location: '',
        descrp: '',
        from: '',
        to: ''
    })
    const onUpdateDetails = () => {

        if (!auth.user._id)
            return

        let edcs = auth.user.education;
        edcs[data] = userData
        auth.setUser({
            ...auth.user,
            // education: edcs
            education: edcs
        })
        // setData(userData)
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

    const onDeleteDetails = () => {

        if (!auth.user._id)
            return

        let edcs = auth.user.education.filter((e, i) => i != data);
        auth.setUser({
            ...auth.user,
            education: edcs
        })
        // setData(userData)
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
        setData(null)
    };

    const onHandleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: [e.target.value] })

    };

    useEffect(() => {
        if (data != null && auth.user.education.length > 0) {
            setUserData(auth.user.education[data])
        }
        return () => {
            console.log("updated exit")
        };
    }, [data])


    if (!show)
        return null;
    return (
        <div className="flex w-full  items-center justify-center xs:flex-col absolute top-4 left-0">
            <div className=" bg-[#fff] relative w-4/6 h-auto p-3 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12">
                <h2 className="text-[#f48c2b] top-0 left-2 text-lg p-2 absolute ">Education</h2>

                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Name of Education</label>
                        <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
                            name="title"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.title}
                        />
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                    <div className="flex flex-col   w-[45%] p-2 xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">School/College/University</label>
                        <input className="rounded-xl w-full shadow-sm shadow-black p-2" type="text"
                            name="orginization"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.orginization}
                        />
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>

                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col   w-[45%]  p-2  xs:w-full  ">
                        <label className="w-full text-base p-2 ">From</label>
                        <input className="  rounded-xl w-full  p-2 shadow-sm shadow-black" type="date"
                            name="from"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.from}
                        />
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                    <div className="flex  flex-col  w-[45%]  p-2 xs:w-full">
                        <label className="w-full p-2 text-base xs:w-1/4">Location</label>
                        <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="text"
                            name="location"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.location}

                        />
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>

                <div className="flex p-1    w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col  xs:w-full  w-[45%] p-2 justify-around  ">
                        <label className="w-full text-base p-2">To</label>
                        <input className="  rounded-xl w-full p-2  shadow-sm shadow-black" type="date"
                            name="to"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.date}
                        />
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>

                <div className="p-1">
                    <h2>Description :</h2>
                    <textarea rows={5} cols={100} className="rounded-2xl pl-2 xs:h-24 w-4/5 xs:w-11/12 shadow-sm shadow-black"
                        name="descrp"
                        onChange={(e) => onHandleChange(e)}
                        value={userData.descrp}
                    ></textarea>
                </div>

                <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end">
                    <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                        onClick={() => onDeleteDetails()}
                    >Delete
                    </button>
                    <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                        onClick={() => onUpdateDetails()}
                    >Update
                    </button>
                    <button className=" xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"
                        onClick={() => onCancelBtn()}
                    >Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateEducation;
