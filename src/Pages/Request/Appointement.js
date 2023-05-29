import React, { useState, useEffect } from "react";
import MultipleDatePicker from "../../Components/Helper/multiDate";
import AllPost from "../Profile/AllPost";
import { Link } from "react-router-dom";
import { getAllRequested, getAllRequester } from "../../App/RequestApi";
import { useAuth } from "../../providers/auth";
import Meeting from "./Meeting";
import { Radio } from "antd";
import RecievedReq from "./RecievedReq";
import SendReq from "./SendReq";
import Loader from "../../Components/Helper/Loader";

const Appointement = () => {
    const auth = useAuth()
    const [profileToggler, setProfileToggler] = useState('1')
    const [requests, setRequests] = useState([])
    const [refreshReqData, setRefreshReqData] = useState(false)
    const [loader, setLoader] = useState({
        post: false
    })

    useEffect(() => {
        const getListAppointements = async () => {
            console.log('refreshReqData', refreshReqData)
            let res;

            if (profileToggler == '1') {//send

                setLoader({ ...loader, post: true })
                res = await getAllRequester(auth.user._id);
            }
            if (profileToggler == '2') {//received
                setLoader({ ...loader, post: true })
                res = await getAllRequested(auth.user._id);
            }
            if (res.error) {
                setLoader({ ...loader, post: false })
            } else if (res.payload) {
                setLoader({ ...loader, post: false })
                setRequests(res.payload)
            }
        };
        getListAppointements()
        return () => {

        };
    }, [profileToggler, refreshReqData])
    return (
        <>
            <div className="flex w-full ml-16 h-screen rounded-t-3xl bg-white  dark:bg-color-11 transition-all duration-500 ease-in-out p-3 mx-2 dark:text-white xs:flex-col xs:ml-0" >
                {/* <div className="w-1/3 flex flex-col h-auto items-center p-1 gap-6 mt-5 overflow-y-hidden  rounded-tl-3xl xs:w-full  xs:hidden sm:hidden sm:ml-0 xs:ml-0  ">
                    <MultipleDatePicker

                    />

                </div> */}

                <div className="w-3/5 flex-col flex overflow-y-auto sm:w-full xs:relative sm:mb-16 ">
                    <h3 className="text-xl font-semibold p-2 dark:text-white">Your Appointements</h3>

                    <div className="flex top-0 sticky bg-white dark:bg-color-11 p-2  gap-4 sm:w-full sm:text-[10px] sm:gap-1 sm:p-1 mt-1  mb-2 ">

                        <button
                            className={profileToggler == 1 ? "bg-color-14 text-white rounded-2xl text-md px-4 py-1 sm:rounded-lg sm:px-2 sm:w-auto sm:text-[10px]  shadow-md shadow-color-8 dark:shadow-sm " : " dark:bg-color-11 dark:text-white dark:shadow-none dark:border bg-[#EAF0FF] text-black rounded-2xl text-md px-4 py-1 shadow-md shadow-slate-400 "}

                            onClick={() => setProfileToggler('1')}
                        >
                            Send Requests
                        </button>
                        <button
                            className={profileToggler == 2 ? "bg-color-14 text-white rounded-2xl text-md px-4 sm:px-2 sm:w-auto sm:text-[10px] py-1 shadow-md shadow-color-8  dark:shadow-sm" : " dark:bg-color-11 dark:text-white dark:shadow-none dark:border bg-[#EAF0FF] text-black rounded-2xl text-md px-4 py-1 shadow-md shadow-slate-400 "}

                            onClick={() => setProfileToggler('2')}
                        >
                            Received Requests
                        </button>
                        {/* <button
                            className={profileToggler == 2 ? "bg-[#fb923c] dark:shadow-sm text-white rounded-2xl text-md px-4 sm:px-2 sm:w-auto sm:text-[10px] py-1 shadow-md shadow-slate-400 " : " bg-[#EAF0FF] text-black dark:shadow-sm rounded-2xl text-md px-4 py-1 shadow-md shadow-slate-400 "}
                            onClick={() => setProfileToggler('2')}
                        >
                            Completed Meeting
                        </button> */}
                    </div>
                    {/* ccalender and about */}
                    {
                        loader.post ?
                            <Loader />
                            :
                            <div className=" xs:overflow-y-auto overflow-y-auto " >
                                {
                                    profileToggler === '1' ?
                                        <SendReq
                                            requests={requests}
                                            setRefreshReqData={() => setRefreshReqData(!refreshReqData)}
                                        />
                                        :
                                        <RecievedReq
                                            requests={requests}
                                            setRefreshReqData={() => setRefreshReqData(!refreshReqData)}
                                        />
                                }
                            </div>
                    }

                </div>
            </div >
        </>
    );
};

export default Appointement;
