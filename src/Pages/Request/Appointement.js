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

const Appointement = () => {
    const auth = useAuth()
    const [profileToggler, setProfileToggler] = useState('1')
    const [requests, setRequests] = useState([])
    const [loader, setLoader] = useState({
        post: false
    })

    useEffect(() => {
        const getListAppointements = async () => {
            let res;

            if (profileToggler == '1')
                setLoader({ ...loader, post: true })
            res = await getAllRequester(auth.user._id);
            if (profileToggler == '2')
                setLoader({ ...loader, post: true })

            res = await getAllRequested(auth.user._id);

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
    }, [profileToggler])

    return (
        <>
            <div className="flex w-full ml-16 h-screen rounded-t-3xl bg-white dark:bg-slate-800 dark:text-white xs:flex-col xs:ml-0  xs:h-full " >
                {/* <div className="w-1/3 flex flex-col h-auto items-center p-1 gap-6 mt-5 overflow-y-hidden  rounded-tl-3xl xs:w-full  xs:hidden sm:hidden sm:ml-0 xs:ml-0  ">
                    <MultipleDatePicker

                    />

                </div> */}

                <div className="w-3/5 flex-col flex overflow-y-auto xs:w-full xs:relative   ">
                    <h3 className="text-lg font-semibold text-[#FF0000]">Your Appointements</h3>

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
                                <SendReq
                                    requests={requests}
                                />
                                :
                                <RecievedReq
                                    requests={requests}
                                />
                        }
                    </div>
                </div>
            </div >
        </>
    );
};

export default Appointement;
