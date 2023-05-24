import React, { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth";
import { Link } from "react-router-dom";
import { getNotifications, updateNotification } from "../../App/NotificationApi";
import { useAlert } from "../../Components/Alert";
import { postImgCollection } from "../../assets/postImages/postImg";
import moment from "moment";
import { getTimeAgo } from "../../Components/Helper/helper";
import { NotiMassagesToShow } from "../../Components/Helper/NotiMassages";

function Notification() {
    const auth = useAuth();
    const [notification, setnotification] = useState([]);
    const [isnotification, setisnotification] = useState(false);
    const [showNotification, contextHolder] = useAlert()
    //get fovourit
    useEffect(() => {
        const fetchData = async (id) => {
            const res = await getNotifications({ receiverId: auth.user._id });
            if (res.error) {
                showNotification(res.error.errMessage)
            } else if (res.payload) {
                if (res.payload.length <= 0) return;
                setnotification(res.payload);
                // setisnotification(res.payload[0].isnotification);
            }
        };
        // if (auth.user) {
        //minus one notification
        fetchData();
        // }
    }, [isnotification]);

    const onClickNotification = async (item) => {

        //update
        let data = {
            ...item,
            read: true
        };
        const res = await updateNotification(item._id, data);
        console.log("res", res);
        if (res.error) {
            showNotification(res.error.errMessage)
        } else if (res.payload) {
            setisnotification(!isnotification);
            showNotification(res.message)
        }

    };

    console.log("notification", notification);

    return (
        <div className="bg-white w-full dark:bg-color-11 transition-all duration-500 ease-in-out rounded-3xl sm:ml-0 sm:h-screen ml-16 py-4 px-2">
            <div id="result " className="w-1/2 mt-16 dark:bg-color-11  p-2 relative sm:w-full">
                <div className="w-full fixed z-[11]  dark:bg-color-11 dark:text-white bg-white top-16 ">
                    <h1 className="text-color-14   font-semibold  px-4 py-4  w-fit text-2xl ">
                        Notification
                    </h1>
                </div>
                {notification.length > 0 &&
                    notification.map((item, i) => (
                        <Link to={"/postcontent/" + item.postId?._id} key={i}>
                            <div
                                className={item.read ? "bg-white border-color-11 border p-2 w-[100%] transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-[#5d899795] h-auto dark:bg-color-11 dark:border dark:text-white rounded-lg m-2 flex sm:w-full " : "bg-color-3 border-color-11 border p-2 w-[100%] transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-[#5d899795] h-auto dark:bg-color-11 dark:border dark:text-white rounded-lg m-2 flex sm:w-full "}
                                key={i}
                                onClick={() => onClickNotification(item)}
                            >
                                <div className="flex  flex-row w-full">
                                    <div className=" relative  w-[40%] h-auto rounded-lg">
                                        <img
                                            src={
                                                item.thumbnailUrl &&
                                                postImgCollection[item.thumbnailUrl.image]
                                            }
                                            className="h-auto   w-full rounded-xl sm:h-auto sm:w-full "></img>
                                        <span className="font-semibold  absolute  text-white font-font-logo top-7 w-[35%] left-3 line-clamp-3 text-sm xs:text-xs ">
                                            {item.postTitle}
                                        </span>
                                        <div className="flex gap-2 sm:gap-[2px] items-center absolute  bottom-3 sm:bottom-2 sm:left-2  left-3">
                                            <img
                                                //   src={cat_image1}
                                                className="h-5 sm:h-3 sm:w-3 w-5"></img>
                                            <label className="font-font-logo sm:text-xs text-white">
                                                {/* {item.createdTutor.name} */}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-1 text-xs flex flex-col w-[100%]  dark:text-white">
                                        <span>
                                            {getTimeAgo(item.createdAt)}
                                        </span>
                                        <div className="flex flex-col p-1">
                                            <h1 className="text-base dark:text-white line-clamp-2 text-blue-900">
                                                {NotiMassagesToShow[item.message]} <b>{item.postId?.postTitle}</b> from <b>{item.senderId?.name}</b>
                                            </h1>
                                            {/* <div className="flex  gap-1 items-center xs:gap-1 xs:text-xs cursor-pointer  px-3 bg-white dark:bg-color-11 text-color-4 rounded-xl   dark:border dark:border-white  w-fit font-bold "
                                        >
                                            <label className="text-lg  px-5 cursor-pointer">
                                                View
                                            </label>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Notification;