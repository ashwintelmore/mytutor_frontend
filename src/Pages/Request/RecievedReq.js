import React, { useState } from 'react'
import Meeting from './Meeting';

export default function RecievedReq({ requests }) {

    const [show, setShow] = useState(false)
    const [reqData, setReqData] = useState({})
    const onManageClick = (item, i) => {
        setShow(!show)
        setReqData(item)
    };

    return (
        <>
            <div className=" w-full p-4 flex flex-col gap-4  overflow-scroll xs:w-full xs:p-1 xs:ml-1">

                {
                    requests.length > 0 ?
                        requests.map((item, i) => (
                            <div className="flex flex-col bg-yellow-300 rounded-2xl gap-1 "
                                key={i}
                            >
                                <div className="flex flex-col p-2   gap-2  ">
                                    <div className="flex">
                                    <img
                                        className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                                        src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                                        alt=""
                                    />
                                    <div></div>
                                     <h3 className="text-violet-800 ">{item.requesterName}</h3>
                                            <p className="text-sm">{item.postName}</p></div>
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col text-xs">
                                           
                                            <p className="text-sm">message : {item.reqMassege}</p>
                                            <p className="text-sm">Request for {item.reqTime} hour</p>

                                            <p className="text-sm">{item.reqAccept ? "Accepeted" : "Not Accepted"}</p>
                                            {
                                                item.reqAccept
                                                &&
                                                <>
                                                    <p className="text-sm">on Dated : {item.reqDates[0]}</p>
                                                    <p className="text-sm">At time : {item.reqTime}</p>
                                                    <p className="text-sm"> Meeting Name : {item.meetingName}</p>
                                                    <p className="text-sm">Meeting Code : {item.meetingCode}</p>
                                                </>
                                            }


                                            <div>
                                                <button
                                                    className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500"
                                                    onClick={() => onManageClick(item, i)}
                                                >
                                                    Manage Meeting
                                                </button>
                                                {
                                                    item.reqAccept
                                                    &&
                                                    <a href="http://github.com/" target="_blank">
                                                        <button className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500"
                                                        >Go to Meeting
                                                        </button>
                                                    </a>
                                                }
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
                        <p> No Requests recieved </p>
                }
            </div>
            <Meeting
                show={show}
                setShow={() => setShow(!show)}
                data={reqData}
            />
        </>
    )
}
