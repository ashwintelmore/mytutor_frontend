import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Meeting from './Meeting'

export default function SendReq({ requests }) {

    return (
        <>
            <div className=" w-full p-4 flex flex-col gap-4 overflow-scroll xs:w-full xs:p-1 xs:ml-1">

                {
                    requests.length > 0 ?
                        requests.map((item, i) => (

                            <div className="flex flex-col  gap-1 " key={i}>
                                <div className="flex  gap-2  ">
                                    <div clas>
                                        <i class="fa-solid fa-up-right-from-square "></i>
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col text-xs">
                                            <h2 className="text-violet-800 ">
                                                {item.requestedName}
                                                <span className=" text-gray-600"> Requesting time {item.reqTime} hour </span>
                                            </h2>
                                            <Link to={'/postcontent/' + item.postId}
                                                key={i}
                                            >
                                                <p className="text-lg">{item.postName}</p>
                                            </Link>
                                            {
                                                item.reqAccept
                                                    ?
                                                    <>
                                                        <p className="text-sm">Accepeted</p>
                                                        <p className="text-sm">on Dated :   {item.reqDates[0]}</p>
                                                        <p className="text-sm">At time : {item.reqTime}</p>
                                                        <p className="text-sm"> Meeting Name : {item.meetingName}</p>
                                                        <p className="text-sm">Meeting Code : {item.meetingCode}</p>
                                                        <div>
                                                            <a href="http://github.com/" target="_blank">
                                                                <button className=" rounded-xl text-sm  h-7 w-fit px-4  text-white bg-orange-500"
                                                                >Go to Meeting
                                                                </button>
                                                            </a>

                                                        </div>
                                                    </>
                                                    :
                                                    <p className="text-sm">Not Accepeted</p>
                                            }
                                        </div>
                                        <div className="text-lg font-extrabold">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                        :
                        <p> No Requests Sended </p>
                }


            </div>

        </>
    )
}
