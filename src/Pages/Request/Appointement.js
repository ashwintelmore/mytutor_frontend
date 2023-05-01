import React, { useState, useEffect } from "react";
import MultipleDatePicker from "../../Components/Helper/multiDate";
import AllPost from "../Profile/AllPost";
import { Link } from "react-router-dom";
import { getAllRequested, getAllRequester } from "../../App/RequestApi";
import { useAuth } from "../../providers/auth";
import Meeting from "./Meeting";
import { Radio } from "antd";

const Appointement = () => {
    const auth = useAuth()
    const [profileToggler, setProfileToggler] = useState('2')
    const [show, setShow] = useState(false)
    const [requests, setRequests] = useState([])
    const [reqData, setReqData] = useState({})

    useEffect(() => {
        const getListAppointements = async () => {
            let res;
            if (profileToggler == '1')
                res = await getAllRequester(auth.user._id);
            if (profileToggler == '2')
                res = await getAllRequested(auth.user._id);

            if (res.error) {
                //handle error
                // setErr(res.error.errMessage)
            } else if (res.payload) {
                //handle sussece responce
                setRequests(res.payload)
            }
        };

        console.log('requests', requests)
        getListAppointements()
        return () => {

        };
    }, [profileToggler])

    const onManageClick = (item, i) => {
        setShow(!show)
        setReqData(item)
    };


    const [meetings, setMeetings] = useState([])

    console.log('requests', requests)

    return (
        <>
            <div className="flex w-full ml-16 h-screen rounded-t-3xl bg-white dark:bg-slate-800 dark:text-white xs:flex-col xs:ml-0  xs:h-full " >
                <div className="w-1/3 flex flex-col h-auto items-center p-1 gap-6 mt-5 overflow-y-hidden  rounded-tl-3xl xs:w-full   ">
                    <h3 className="text-lg font-semibold text-[#FF0000]">Your Appointements</h3>

                    <MultipleDatePicker

                    />

                </div>

                <div className="w-3/5 flex-col flex overflow-y-auto xs:w-full xs:relative   ">
                    <div className="flex top-0 sticky bg-white p-2 gap-4 mt-1  ">

                        <button
                            className={profileToggler == 1 ? "rounded-2xl text-sm w-fit px-3 h-8 shadow-md shadow-slate-500 bg-orange-500" : "rounded-2xl bg-[#EAF0FF] text-sm w-fit px-3 h-8 shadow-md shadow-slate-50"}

                            onClick={() => setProfileToggler('1')}
                        >
                            Send Requests
                        </button>
                        <button
                            className={profileToggler == 2 ? "rounded-2xl text-sm w-fit px-3 h-8 shadow-md shadow-slate-500 bg-orange-500" : "rounded-2xl bg-[#EAF0FF] text-sm w-fit px-3 h-8 shadow-md shadow-slate-50"}

                            onClick={() => setProfileToggler('2')}
                        >
                            Received Requests
                        </button>
                    </div>
                    {/* ccalender and about */}
                    <div className=" xs:overflow-y-auto " >
                        {
                            profileToggler === '1' ?
                                <div className=" w-full p-4 flex flex-col gap-4 overflow-scroll xs:w-full xs:p-1 xs:ml-1">

                                    {
                                        requests.length > 0 ?
                                            requests.map((item, i) => (
                                                <Link to={'/postcontent/' + item.postId}
                                                    key={i}
                                                >
                                                    {/* Comment card */}
                                                    <div className="flex flex-col  gap-1 "
                                                        key={i}
                                                    >
                                                        <div className="flex  gap-2  ">
                                                            <img
                                                                className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                                                                src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                                                                alt=""
                                                            />
                                                            <div className="flex justify-between w-full">
                                                                <div className="flex flex-col text-xs">
                                                                    <h3 className="text-violet-800 ">{item.requestedName}</h3>
                                                                    <p className="text-sm">{item.postName}</p>
                                                                    <p className="text-sm">{item.reqAccept ? "Accepeted" : "Not Accepted"}</p>
                                                                    <p className="text-sm">{item.reqAccept ? "MeetingLink" : ""}</p>
                                                                    {
                                                                        item.reqAccept
                                                                        &&
                                                                        <>
                                                                            <p className="text-sm">on Dated {item.reqDates[0]}</p>
                                                                            <p className="text-sm">At time {item.reqTime}</p>
                                                                            <p className="text-sm">{item.reqAccept ? item.meeting : ""}</p>
                                                                        </>
                                                                    }


                                                                    {
                                                                        item.reqAccept
                                                                        &&
                                                                        <div>
                                                                            <button className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500 mr-2"
                                                                            >Cancel Meeting
                                                                            </button>

                                                                            <a href="http://github.com/" target="_blank">
                                                                                <button className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500"
                                                                                >Go to Meeting
                                                                                </button>
                                                                            </a>
                                                                        </div>

                                                                    }


                                                                </div>
                                                                <div className="text-lg font-extrabold"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="flex items-center gap-3 ml-16 text-sm xs:gap-2 xs:text-xs">
                                                            <h4>60</h4>
                                                            <i className="fa-solid fa-thumbs-up"></i>
                                                            <h4>60</h4>
                                                            <i className="fa-solid fa-thumbs-down"></i>
                                                            <label>reply</label>
                                                        </div> */}
                                                    </div>
                                                </Link>
                                            ))
                                            :
                                            <p> No data available </p>
                                    }


                                </div>
                                :
                                <div className=" w-full p-4 flex flex-col gap-4 overflow-scroll xs:w-full xs:p-1 xs:ml-1">

                                    {
                                        requests.length > 0 ?
                                            requests.map((item, i) => (

                                                <div className="flex flex-col  gap-1 "
                                                    key={i}
                                                >
                                                    <div className="flex  gap-2  ">
                                                        <img
                                                            className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                                                            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                                                            alt=""
                                                        />
                                                        <div className="flex justify-between w-full">
                                                            <div className="flex flex-col text-xs">
                                                                <h2 className="text-violet-800 ">{item.requesterName}
                                                                    <span className=" text-gray-600"> Requesting for {item.reqTime} hour </span>

                                                                </h2>
                                                                <Link to={'/postcontent/' + item.postId}
                                                                    key={i}
                                                                >

                                                                    <p className="text-lg">{item.postName}</p>
                                                                </Link>
                                                                <p className="text-sm text-gray-600">
                                                                    {item.reqMassege}
                                                                </p>
                                                                {/* <p className="text-sm text-gray-600">
                                                                    meetingLink
                                                                </p> */}


                                                                <div className="mt-2">
                                                                    <button className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500"
                                                                        onClick={() => onManageClick(item, i)}
                                                                    >Manage Meeting
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="text-lg font-extrabold">
                                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                            :
                                            <p> No data available </p>
                                    }


                                </div>
                        }
                    </div>
                </div>
            </div >
            <Meeting
                show={show}
                setShow={() => setShow(!show)}
                data={reqData}
            />
        </>
    );
};

export default Appointement;
