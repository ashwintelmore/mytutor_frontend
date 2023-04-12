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
    console.log('data :>> ', data);
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

    const onCancelBtn = () => {
        setShow(!show)
        setData(null)
    };

    const onHandleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })

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
        <div className="flex w-full items-center justify-center xs:flex-col absolute top-4 left-0">
            <div className=" bg-[#fff] w-4/6 h-auto p-1 rounded-3xl flex flex-col items-center justify-center  shadow-md shadow-black xs:flex-col xs:w-11/12">
                <h2 className="text-[#f48c2b] text-left">Education</h2>

                <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col  w-2/5 p-4 justify-around xs:w-full">
                        <label className="w-1/5 text-lg xs:text-base">Name of Education</label>
                        <input className="rounded-xl w-full shadow-sm shadow-black" type="text"
                            name="title"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.title}
                        />
                    </div>
                    <div className="flex flex-col  w-1/2   p-4  xs:w-full ">
                        <label className="w-1/2 text-lg xs:text-sm xs:w-3/5 ">Schoole/College/University name</label>
                        <input className="rounded-xl w-9/12 xs:w-4/5 xs:p-2 shadow-sm shadow-black" type="text"
                            name="orginization"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.orginization}
                        />
                    </div>
                </div>

                <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col   w-2/5  p-4 justify-around xs:w-full  ">
                        <label className="w-1/5 text-lg ">From</label>
                        <input className="  rounded-xl w-full  shadow-sm shadow-black" type="text"
                            name="from"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.from}
                        />
                    </div>
                    <div className="flex  flex-col  w-1/2  p-4 xs:w-full">
                        <label className="w-1/2 text-lg xs:w-1/4">Location</label>
                        <input className="  rounded-xl w-9/12   shadow-sm shadow-black" type="text"
                            name="location"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.location}

                        />
                    </div>
                </div>

                <div className="flex p-2 gap-1  w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col  xs:w-full  w-2/5 p-4 justify-around  ">
                        <label className="w-1/5 text-lg ">To</label>
                        <input className="  rounded-xl w-full  shadow-sm shadow-black" type="text"
                            name="to"
                            onChange={(e) => onHandleChange(e)}
                            value={userData.date}
                        />
                    </div>
                </div>

                <div className="p-2">
                    <h2>Description :</h2>
                    <textarea rows={5} cols={50} className="rounded-2xl xs:h-24 xs:w-11/12 shadow-sm shadow-black"
                        name="descrp"
                        onChange={(e) => onHandleChange(e)}
                        value={userData.descrp}
                    ></textarea>
                </div>

                <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-2/5 justify-between">
                    <button className="xs:w-2/5 bg-[#F8AF6A] rounded-xl p-2 w-2/5"

                        onClick={() => onUpdateDetails()}
                    >Add
                    </button>
                    <button className=" xs:w-2/5 bg-[#F8AF6A] rounded-xl p-2 w-2/5"
                        onClick={() => onCancelBtn()}
                    >Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateEducation;
