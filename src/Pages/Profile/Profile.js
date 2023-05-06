import React, { useEffect, useState } from "react";

import About from "./About";
import AllPost from "./AllPost";
import { useAuth } from "../../providers/auth";
import { updateUser } from "../../App/Api";
import Loader, { LoaderSmall } from "../../Components/Helper/Loader";
import { ConfigProvider, FloatButton, notification } from "antd";
import { useAlert } from "../../Components/Alert";

const Profile = ({ toggler = '1' }) => {
  const [profileToggler, setProfileToggler] = useState(toggler)
  const [loader, setLoader] = useState({
    user: false,
    post: false
  })
  const auth = useAuth()
  const [showNotification, contextHolder] = useAlert();

  const updateUserData = async (data) => {
    setLoader({ ...loader, user: true })
    const res = await updateUser(data);
    if (res.error) {
      setLoader({ ...loader, user: false })
      showNotification(res.error.errMessage)
      // setErr(res.error.errMessage)
    } else if (res.payload) {
      setLoader({ ...loader, user: false })
      showNotification("Profile Updated successfully")
    }
  };
  if (auth.loading || loader.user)
    return <Loader />

  return (
    <div className="flex w-full ml-16 h-screen rounded-t-3xl bg-white dark:bg-slate-800 dark:text-white  sm:p-2   sm:ml-0 sm:flex-col sm:h-full sm:w-full" >
      {contextHolder}
      <div className="w-1/4 flex flex-col h-auto items-center p-1 gap-6 mt-5 overflow-y-hidden  rounded-tl-3xl  sm:w-full  ">
        <h3 className="text-lg font-semibold text-[#FF0000]">Profile Details</h3>
        <div className="h-28 w-28 rounded-full bg-[#fb923c]  relative ">
          <span
            className="rounded-full h-28 w-28 p-1"
          >
            {auth.user.name[0]}
          </span>
          {/* <i className="fa-solid fa-user-pen absolute bottom-2 h-8 w-8 bg-slate-50 rounded-full p-2 right-0 "></i> */}
        </div>
        <div className="flex flex-col  items-center text-lg  ">
          {/* <label className="text-[#1A0970]">UserName</label> */}
          <input
            type="text"
            placeholder="Write something"
            className="rounded-lg w-full outline-none text-center"
            value={auth.user.name}
            onChange={(e) => auth.setUser({ ...auth.user, name: e.target.value })}
          />
          <label className="text-sm">{auth.user.analytics.favorite} favorite</label>
        </div>

        <div className="flex gap-12 w-full text-lg">
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">{auth.user.analytics.lectures}</label>
            <label className="text-sm">Lectures</label>
          </div>
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">{auth.user.analytics.hours}</label>
            <label className="text-sm">Hours</label>
          </div>
          <div className="flex-col flex items-center ">
            <label className="text-[#1A0970]">{auth.user.analytics.learners}</label>
            <label className="text-sm">Learners </label>
          </div>
        </div>
        <div className="flex flex-col w-full  items-center gap-1 text-base p-1">
          <label className="text-[#1A0970]">Bio</label>
          <p className="w-full ">
            <textarea

              type="text"
              placeholder="Write something"
              className="rounded-lg w-full text-sm px-2 py-1 border-zinc-700 shadow-sm shadow-slate-500 outline-none "
              value={auth.user.bio}
              onChange={(e) => auth.setUser({ ...auth.user, bio: e.target.value })}
            />
          </p>
        </div>
        <div className="text-lg w-11/12 gap-3 flex flex-col">
          <h3 className="text-[#1A0970]">Phone Number</h3>
          <div className="flex flex-col gap-8">
            <div className="flex items-center  relative border border-gray-500 shadow-slate-400 shadow-md text-sm   rounded-xl p-1  ">
              <input
                type="number"
                placeholder="91850*******"
                className="rounded-lg px-2 py-1 text-[10px]   w-full  outline-none "
                value={auth.user.phoneNumber}
                onChange={(e) => auth.setUser({ ...auth.user, phoneNumber: e.target.value })}
              ></input>


              {/* <button className="absolute rounded-xl text-sm  h-7 w-20  text-white right-1   bg-orange-500">Save</button> */}
              <h6 className="text-xs left-2 absolute -bottom-5 ">Without contry code i.e +91,+0, etc</h6>
            </div>

            {/* <div className="flex items-center relative border border-gray-500 shadow-slate-400 shadow-md text-sm rounded-xl p-1  ">
              <input
                type="text"
                placeholder="Write something"
                className="rounded-lg w-full outline-none px-2 py-1 "></input>


              <button className="absolute rounded-xl text-sm  h-7 w-16 text-white right-1   bg-orange-500">Verify</button>
              <h6 className="text-xs left-2 absolute -bottom-5 ">Something content</h6>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-3/4 flex-col flex overflow-y-auto xs:w-full xs:relative sm:w-full ">
        <div className="flex top-0 sticky bg-white p-2 gap-4 mt-1  ">

          <button
            className={profileToggler == 1 ? "bg-[#fb923c] text-white rounded-2xl text-md px-4 py-1  shadow-md shadow-slate-400 " : " bg-[#EAF0FF] text-black rounded-2xl text-md px-4 py-1 shadow-md shadow-slate-400 "}
            onClick={() => setProfileToggler('1')}
          >
            About
          </button>
          <button
            className={profileToggler == 2 ? "bg-[#fb923c] text-white rounded-2xl text-md px-4 py-1  shadow-md shadow-slate-400 " : " bg-[#EAF0FF] text-black rounded-2xl text-md px-4 py-1 shadow-md shadow-slate-400 "}

            onClick={() => setProfileToggler('2')}
          >
            All Post
          </button>
        </div>
        {/* ccalender and about */}

        <div className=" xs:overflow-y-auto sm:flex sm:flex-col  " >
          {
            profileToggler === '1' ?
              <About />
              :
              <AllPost />
          }
        </div>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#rgb(251 146 60)',
            fontSize: '25',
            lineHeight: '0'
          },
        }}
      >
        <FloatButton
          onClick={() => updateUserData(auth.user)}
          description={"Update"}
          shape="square"
          style={{ right: '40%', width: 100, zIndex: 2 }}
          type="primary"
        />
      </ConfigProvider>
    </div>

  );
};

export default Profile;
