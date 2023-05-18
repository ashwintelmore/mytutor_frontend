import React, { useEffect, useRef, useState } from "react";
import Meeting from "./Meeting";
import Payment from "./Payment";
import { useAuth } from "../../providers/auth";
import EditReq from "./EditReq";

export default function RecievedReq({ requests, setRefreshReqData }) {
  const [show, setShow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [reqData, setReqData] = useState({});
  const auth = useAuth()
  const onManageClick = (item, i) => {
    setShow(!show);
    setReqData(item);
  };
  console.log('reqData', reqData)
  console.log('requests', requests)
  const [meetingLink, setMeetingLink] = useState("");

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
    } catch (err) {
      console.error("Failed to copy meeting link: ", err);
    }
  };

  const handleLinkChange = (event) => {
    setMeetingLink(event.target.value);
  };
  const onPaymentClick = (data, i) => {
    setShowPayment(!showPayment)
    setReqData(data);
  };
  const handleShowPayment = () => {
    setShowPayment(!showPayment)
    setRefreshReqData(true)
  };

  const [cardActioveInd, setcardActioveInd] = useState(-1)
  const [openProfile, setOpenProfile] = useState([]);
  // const auth = useAuth()
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const onClickThreePoint = (item, i) => {
    setcardActioveInd(i)
    setOpenProfile((prev) => !prev)
  }
  return (
    <>
      <div className=" w-full p-4 flex flex-col gap-4  overflow-scroll xs:w-full xs:p-1 xs:ml-1" ref={menuRef}>
        {requests.length > 0 ? (
          requests.map((item, i) => (
            <div
              className="flex flex-col     shadow-sm shadow-color-8 rounded-2xl  "
              key={i}>
              <div className="flex flex-col  p-2 rounded-2xl dark:bg-color-11 transition-all duration-500 ease-in-out bg-color-3 hover:shadow-md hover:shadow-[#5d899795]  transition-all ease-in-out duration-300  gap-2  ">
                <div className="flex justify-between">
                  <div className="flex gap-2 ">
                    <img
                      className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-[1px]  border-red-500"
                      src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-color-9 dark:text-white ">{item.requesterId.name}</h3>
                      <p className="text-sm">{item.postId.postTitle}</p>
                    </div>
                  </div>
                  <div
                    // onClick={() => setOpenProfile((prev) => !prev)}
                    className="text-lg font-extrabold relative">
                    <i className="fa-solid cursor-pointer px-2 fa-ellipsis-vertical"
                      onClick={() => onClickThreePoint(item, i)}
                    ></i>
                    {
                      (openProfile && i == cardActioveInd)
                      &&
                      <EditReq
                        type={'requestRecieved'}
                        item={item}
                      />}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-2 text-xs sm:text-xs w-full">
                    {/* <p className="text-sm">message : {item.reqMassege}</p> */}
                    {/* <p className="text-sm">Request for {item.reqTime} hour</p> */}
                    <div className="flex sm:text-xs justify-between">
                      {
                        item.reqAccept ?
                          <div className="flex items-center gap-2 sm:gap-1 sm:text-xs text-lg">
                            <i className="fa-solid fa-circle-check text-color-10"></i>
                            <p className="text-sm sm:text-[10px]">
                              Accepeted
                            </p>
                          </div>
                          :
                          <div className="flex items-center gap-2 text-lg">
                            <i className="fa-solid fa-circle-xmark text-[red]"></i>
                            <p className="text-sm sm:text-[10px]">
                              Not Accepted
                            </p>
                          </div>
                      }

                      <p className="text-sm sm:text-[10px]">On Dated : {item.reqDates[0]}</p>{" "}
                      <p className="text-sm sm:text-[10px]">At time : {item.reqTime}</p>
                    </div>

                    {item.reqAccept && (
                      <>
                        <div className="">

                          <button
                            className="p-1 shadow-sm shadow-color-8 rounded-xl dark:bg-color-11 dark:border bg-color-4  sm:text-[12px] sm:px-2"
                            value={meetingLink}
                            onChange={handleLinkChange}
                            onClick={handleCopyClick}> Meeting Code : {item.meetingId?.meetingCode}
                          </button>
                        </div>

                        {/* <p className="text-sm"> Meeting Name : {item.meetingName}</p> */}
                        {/* <p className="text-sm ">
                          Meeting Code : {item.meetingCode}
                        </p> */}
                      </>
                    )}

                    <div className="gap-2 sm:gap-2 flex justify-end">


                      <button
                        className=" rounded-xl text-sm  h-7 w-fit px-4 sm:px-2 sm:w-auto sm:text-[10px] text-white bg-color-13"
                        onClick={() => onManageClick(item, i)}>
                        Manage Meeting
                      </button>

                      {item.reqAccept && (
                        <button
                          className=" rounded-xl text-sm  h-7 w-fit px-4 sm:px-2 sm:w-auto sm:text-[10px] text-white bg-color-4"
                          onClick={() => onPaymentClick(item, i)}
                        >
                          {item.paymentId && item.paymentId != '' ? 'View Payment' : 'Initiat Payment'}
                        </button>
                      )}
                      {item.reqAccept && (
                        <a href="https://myturt.onrender.com/" target="_blank">
                          <button className=" rounded-xl text-sm  h-7 w-fit px-4 sm:px-2 sm:w-auto sm:text-[10px]  text-white bg-color-10">
                            Go to Meeting
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> No Requests recieved </p>
        )}
      </div>
      <Meeting
        show={show}
        setShow={() => setShow(!show)}
        data={reqData}
      />
      <Payment
        showPayment={showPayment}
        setShowPayment={handleShowPayment}
        reqData={reqData}
        setReqData={(res) => setReqData(res)}
      />
    </>
  );
}
