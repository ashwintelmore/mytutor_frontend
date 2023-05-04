import React, { useState } from "react";
import { Link } from "react-router-dom";
import Meeting from "./Meeting";

export default function SendReq({ requests }) {

    const [meetingLink, setMeetingLink] = useState("");

    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(meetingLink);
        console.log("Meeting link copied to clipboard");
      } catch (err) {
        console.error("Failed to copy meeting link: ", err);
      }
    };
  
    const handleLinkChange = (event) => {
      setMeetingLink(event.target.value);
    };


  return (
    <>
      <div className=" w-[80%] shadow-sm border-2 rounded-xl shadow-slate-500  p-2 flex flex-col  overflow-scroll xs:w-full xs:p-1 xs:ml-1">
        {requests.length > 0 ? (
          requests.map((item, i) => (
            <div className="flex flex-col  gap-2 " key={i}>
              <div className="flex   gap-2  ">
                <div>
                  <i className="fa-solid fa-up-right-from-square "></i>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-2 text-xs">
                    <h2 className="text-violet-800 ">
                      {item.requestedName}
                      <span className=" text-gray-600">
                        {" "}
                        Requesting time {item.reqTime} hour{" "}
                      </span>
                    </h2>
                    <Link to={"/postcontent/" + item.postId} key={i}>
                      <p className="text-lg">{item.postName}</p>
                    </Link>
                    {item.reqAccept ? (
                      <>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-9">
                          <div className="flex items-center gap-2 text-lg">
                            <i class="fa-solid fa-circle-check text-green-600"></i>
                            <p className="text-sm">
                              {item.reqAccept ? "Accepeted" : "Not Accepted"}
                            </p>
                          </div>
                          <p className="text-sm">
                            on Dated : {item.reqDates[0]}
                          </p>{" "}
                          <p className="text-sm">At time : {item.reqTime}</p>
                        </div>
                        {/* <p className="text-sm">Accepeted</p>
                                                        <p className="text-sm">on Dated :   {item.reqDates[0]}</p>
                                                        <p className="text-sm">At time : {item.reqTime}</p> */}
                       
                        </div>
                        <div className=" flex gap-7">
                        <p className="text-sm">
                          {" "}
                          Meeting Name : {item.meetingName}
                        </p>
                          <button className="p-1 shadow-sm shadow-slate-500 rounded-xl bg-[#97ebfa] t" value={meetingLink}
                            onChange={handleLinkChange} onClick={handleCopyClick}> Meeting Code : {item.meetingCode}</button>
                        </div>
                        <div className="flex w-full justify-end ">
                          <a
                            href="https://myturt.onrender.com/"
                            target="_blank">
                            <button className=" rounded-xl justify-end text-sm  h-7 w-fit px-4  text-white bg-orange-500">
                              Go to Meeting
                            </button>
                          </a>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm">Not Accepeted</p>
                    )}
                  </div>
                  <div className="text-lg font-extrabold">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> No Requests Sended </p>
        )}
      </div>
    </>
  );
}
