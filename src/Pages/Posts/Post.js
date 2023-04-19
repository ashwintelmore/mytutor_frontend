import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, updatePost } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import MultipleDatePicker from "../../Components/Helper/multiDate";
import { getUser } from "../../App/Api";
import { Radio, Tag } from "antd";
import Loader from "../../Components/Helper/Loader";

const Post = () => {
  const auth = useAuth()
  const param = useParams()
  const [post, setpost] = useState({})
  const [err, setErr] = useState('')

  const [userData, setUserData] = useState({})

  const hourArr = useMemo(() => {
    return ['0', '1', ' 2', '3', '4', '5', '6']
  }, [])


  const [reqData, setReqData] = useState({
    reqID: '',
    reqDates: [],
    reqTime: '',//hour
    reqMassege: '',
    reqAccept: false,//true or false
  })

  useEffect(() => {
    const fetchgetPost = async () => {
      const res = await getPost(param.id);
      if (res.error) {
        //handle error
        setErr(res.error.errMessage)
      } else if (res.payload) {
        //handle sussece responce

        setpost(res.payload)
      }
    };
    if (!post._id)
      fetchgetPost()

    if (post._id && auth.user._id) {
      const temp = post.reqSlot
      const index = temp.findIndex(e => e.reqID == auth.user._id);
      if (index !== -1) {//found
        setReqData(temp[index])
      }
    }
    return () => {

    };
  }, [post._id, auth.user._id])

  useEffect(() => {

    const fetchgetUserData = async () => {
      const res = await getUser(post.createdTutor);
      if (res.error) {
        //handle error
        setErr(res.error.errMessage)
      } else if (res.payload) {
        //handle sussece responce
        setUserData(res.payload)
      }
    };

    if (!userData._id && post.createdTutor)
      fetchgetUserData()

    return () => {

    };
  }, [post])

  const onHandleClicked = async (e) => {
    let data = {
      ...reqData,
      reqID: auth.user._id
    }

    let temp = [...post.reqSlot]
    const index = temp.findIndex(e => e.reqID == auth.user._id);
    if (index !== -1) {//found
      temp[index] = data
      // temp.splice(index, 1);
    } else {//not found
      temp.push(data);
    }

    const payload = {
      postId: post._id,
      payload: { reqSlot: temp }
    }

    const res = await updatePost(payload)
    console.log('res', res)
    if (res.error) {
      //error
      // setError(res.data.error.errMessage)
      // auth.setLoading(false)

    } else if (res.payload) {
      // auth.setUser(res.data.payload)
      // localStorage.setItem('_id', res.data.payload._id)
      // auth.setLoading(false)
    }


  };
  console.log('post', post)
  if (auth.loading)
    return <Loader />
  if (!post._id || !auth.user._id)
    return null

  return (
    <>
      {
        post && userData._id ?
          <div className="Post ml-16 h-auto rounded-t-3xl flex  dark:text-white dark:bg-zinc-800 bg-white xs:w-full xs:flex-col xs:m-0 sm:m-0 sm:flex-col sm:w-full">
            <div className="flex flex-col w-3/5 xs:w-full sm:w-full">
              <div className=" h-auto p-1 xs:p-1 ">
                <div className="flex justify-between  p-2 m-1 items-center">
                  <h4 className="xs:text-xs text-[#6F6F6F]"> {post.createdAt} </h4>
                  <i className="fa-sharp fa-solid fa-ellipsis-vertical xs:text-xs"></i>
                </div>
                <div className="bg-[#F8AF6A] dark:bg-slate-600 h-80 p-2 rounded-xl  m-4 xs:w-[97%]  xs:m-1 sm:h-40"></div>
                <div className="flex justify-between p-1 mx-1 items-center text-xl sm:text-xs xs:p-0">
                  <h1 className="  font-semibold  sm:text-xs">
                    {post.postTitle}
                  </h1>
                  <div className="flex   items-center gap-5 p-2 xs:gap-0  xs:p-1 sm:text-xs  sm:gap-1 px-4 ">
                    <div className="flex  gap-1 items-center xs:gap-0 sm:text-xs">
                      <i className="fa-solid fa-indian-rupee-sign text-[#FFB300] sm:text-xs">
                        {post.pricePerHour || post.charges}
                      </i>
                      <h6 className="text-[#FFB300] ">
                        (/hr)
                      </h6>
                    </div>
                    <div className="flex gap-1  items-center xs:gap-0 xs:text-xs ">
                      <h4>4</h4>
                      <label className="text-sm text-[#6F6F6F]">sits left</label>
                    </div>
                    <div className="flex  gap-1 items-center xs:gap-1 xs:text-xs">
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-up text-[#FFB300]"></i>
                    </div>
                    <div className="flex gap-1  items-center xs:gap-1 xs:text-xs">
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-down text-[#FFB300]"></i>
                    </div>
                  </div>
                </div>
                <p className="xs:text-xs xs:p-2 p-2 sm:p-4 text-[#6F6F6F]">
                  {post.discrip || post.descrp}
                </p>
              </div>
              <div className="flex justify-between  p-3 xs:p-2">
                <div className="flex items-center gap-2 xs:gap-1 ">
                  <div className="bg-[#D9D9D9] rounded-full h-14 w-14 xs:h-10 xs:w-10 "></div>
                  <div className="flex flex-col xs:text-xs">
                    <label>{userData.name}</label>
                    <label className="text-[#828282]">1.2k Favourite</label>
                  </div>
                </div>
                <button className="bg-[#F8AF6A] text-white w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-9 ">
                  Favourite
                </button>
              </div>
              <div className="flex items-center p-2 gap-3 xs:text-sm ">
                <div className="flex p-1 gap-1 ">
                  <h3>286</h3>
                  <label>Comments</label>
                </div>
                <div className="flex gap-1 items-center">
                  <i className="fa-solid fa-bars-staggered"></i>{" "}
                  <label>Sort by</label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" relative flex items-center p-2 gap-4">
                  <img
                    className="rounded-full h-16 w-16 xs:h-12 xs:w-12 border-2 border-red-500"
                    src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                    alt=""
                  />
                  <input
                    type="text"
                    placeholder="Add a public comment"
                    className="w-11/12 border-b-2 outline-none border-[#303030]">

                  </input>
                  <button className="absolute bg-orange-400 right-2 rounded-xl p-2 top-2 text-white">Comment</button>
                </div>
                <div className="flex flex-col p-4 gap-4 xs:p-2 xs:gap-2 xs:overflow-y-auto">
                  <div className="flex flex-col  gap-1 ">
                    <div className="flex  gap-2  ">
                      <img
                        className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                        src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                        alt=""
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col text-xs">
                        <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                        <p className="text-sm">Something bio details</p></div>
                        <div className="text-lg font-extrabold"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-16 text-sm xs:gap-2 xs:text-xs">
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-up"></i>
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-down"></i>
                      <label>reply</label>
                    </div>
                  </div>
                  <div className="flex flex-col  gap-1 ">
                    <div className="flex  gap-2  ">
                      <img
                        className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                        src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                        alt=""
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col text-xs">
                        <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                        <p className="text-sm">Something bio details</p></div>
                        <div className="text-lg font-extrabold"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-16 text-sm xs:gap-2 xs:text-xs">
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-up"></i>
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-down"></i>
                      <label>reply</label>
                    </div>
                  </div>
                  <div className="flex flex-col  gap-1 ">
                    <div className="flex  gap-2  ">
                      <img
                        className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                        src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                        alt=""
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col text-xs">
                        <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                        <p className="text-sm">Something bio details</p></div>
                        <div className="text-lg font-extrabold"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-16 text-sm xs:gap-2 xs:text-xs">
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-up"></i>
                      <h4>60</h4>
                      <i className="fa-solid fa-thumbs-down"></i>
                      <label>reply</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {
              post.createdTutor == auth.user._id ?
                <div className=" flex  flex-col w-2/5 p-2 xs:w-full xs:p-1 sm:w-full  ">
                  <h4 className="text-lg font-semibold mt-2">All your requests  </h4>
                  <div className="flex flex-col p-4 gap-4 xs:p-2 xs:gap-2 xs:overflow-y-auto">

                    {
                      post.reqSlot.map((item, i) => (
                        <div className="flex flex-col  gap-1 ">
                          <div className="flex  gap-2  ">
                            <img
                              className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                              alt=""
                            />
                            <div className="flex flex-col text-xs">
                              <h3 className="text-violet-800 ">{item.reqID}</h3>
                              <p className="text-sm">{item.reqMassege}</p>
                              <p className="text-sm">Request for {item.reqTime} hour</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 ml-16 text-sm xs:gap-2 xs:text-xs">
                            <h4>Accept</h4>
                            <i className="fa-solid fa-thumbs-up"></i>
                            <h4>Reject</h4>
                            <i className="fa-solid fa-thumbs-down"></i>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>
                :
                <div className=" flex  flex-col w-2/5 p-2 xs:w-full xs:p-1 sm:w-full  ">
                  <h4 className="text-lg font-semibold mt-2">Select available dates</h4>
                  {/* calender */}
                  <MultipleDatePicker
                    value={userData.slots.customDates}
                    available={userData.slots.available}
                    reqValue={reqData.reqDates}
                    onChangeReValue={e => setReqData({ ...reqData, reqDates: e })}
                  />
                  <div className="flex flex-col p-3 xs:p-1  xs:mt-3 xs:gap-2">
                    <h3 className="">Available Time Ranges</h3>
                    <div>
                      {
                        !userData.slots.isEveryTime && userData.slots.timeRange?.map((item, i) => (

                          <Tag
                            onClose={(e) => console.log(e)}
                            className=" text-sm border shadow-lg shadow-gray-400 rounded-xl p-2"
                            title={"bbjn"}
                            key={i}
                          >
                            {item.from} - {item.to}
                          </Tag>

                        ))
                      }
                    </div>
                    <h3 className="mt-5">Select Available Time</h3>
                    <div className="w-full xs:w-full  h-auto p-2 xs:p-1 flex flex-wrap gap-2 xs:gap-1 justify-evenly dark:text-black ">


                      <Radio.Group
                        buttonStyle="solid"
                        optionType="button"
                        defaultValue={reqData.reqTime}
                        value={reqData.reqTime}
                        onChange={(e) => setReqData({ ...reqData, reqTime: e.target.value })}
                      >
                        {
                          hourArr.map((item, i) =>
                            <Radio.Button
                              value={item}
                              key={i}
                              style={{
                                margin: 10
                              }}
                            >
                              {item ? item : '< 1'} hour
                            </Radio.Button>
                          )
                        }
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="p-3 w-4/5 flex flex-col gap-1">
                    <h3 className="font-semibold">Message</h3>
                    <input
                      className="w-full p-2 rounded-2xl outline-none shadow-sm shadow-slate-500"
                      placeholder="Write something..."
                      type='text'
                      value={reqData.reqMassege}
                      onChange={e => setReqData({ ...reqData, reqMassege: e.target.value })}
                    >

                    </input>
                  </div>
                  <div className="flex justify-center">
                    {
                      auth.user._id ?
                        <button className="w-fit h-10 px-2 bg-[#F8AF6A] text-white font-semibold dark:text-black  rounded-lg p-1"
                          onClick={() => onHandleClicked()}
                        >
                          {reqData.reqID ? "Update" : "Request for slot"}
                        </button>
                        :
                        <Link to={'/login'}>
                          <button className="w-32 h-10 bg-[#F8AF6A] text-white font-semibold dark:text-black  rounded-lg p-1"

                          >
                            go to login
                          </button>
                        </Link>
                    }

                  </div>
                </div>
            }
          </div >
          :
          <p>Not found</p>
      }
    </>
  );
};

export default Post;
