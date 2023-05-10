import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { getPost, updatePost } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import { getUser, updateUser } from "../../App/Api";
import { Radio, Tag } from "antd";
import Loader from "../../Components/Helper/Loader";
import { createRequest, getAllPostRequested, getAllPostRequester } from "../../App/RequestApi";
import RecievedReq from "../Request/RecievedReq";
import SendReq from "../Request/SendReq";
import ChoseSlot from "./ChoseSlot";
import cat_image0 from "../Posts/../../assets/cat_image0.jpeg";


const Post = () => {
  const auth = useAuth()
  const param = useParams()
  const navigate = useNavigate()
  const [post, setpost] = useState({})
  const [loading, setLoading] = useState({
    post: false,
    slot: false,
    userData: false,
    request: false
  })
  const [err, setErr] = useState('')
  const [userData, setUserData] = useState({})

  const [requests, setRequests] = useState([])

  const [isFavourite, setisFavourite] = useState(false)

  const [reqData, setReqData] = useState({
    reqID: '',
    reqDates: [],
    reqTime: '',//hour
    reqMassege: '',
    reqAccept: null,//true or false
  })

  //get all details of post
  useEffect(() => {
    const fetchgetPost = async () => {
      setLoading({ ...loading, post: true })
      const res = await getPost(param.id);
      if (res.error) {
        setErr(res.error.errMessage)
        navigate('/notfound')
        setLoading({ ...loading, post: false })
      } else if (res.payload) {
        setpost(res.payload)
        setLoading({ ...loading, post: false })
      }

    };
    if (!post._id)
      fetchgetPost()
    return () => {

    };
  }, [post._id, auth.user._id])

  //get user data mainly for slot details
  useEffect(() => {

    const fetchgetUserData = async () => {

      setLoading({ ...loading, userData: true })
      const res = await getUser(post.createdTutor);

      if (res.error) {
        setErr(res.error.errMessage)
        setLoading({ ...loading, userData: false })
      } else if (res.payload) {
        setUserData(res.payload)
        setLoading({ ...loading, userData: false })
      }
    };

    if (!userData._id && post.createdTutor)
      fetchgetUserData()

    return () => {

    };
  }, [post])


  //get all requsets with postid and requsted id
  useEffect(() => {
    const fetchUserAllRequest = async () => {
      let res
      // setLoading({ ...loading, request: true })
      if (post.createdTutor == auth.user._id) {
        res = await getAllPostRequested(post._id, auth.user._id);
        if (res.error) {
          //handle error
          setErr(res.error.errMessage)
          setLoading({ ...loading, post: false })

        } else if (res.payload) {
          setRequests(res.payload)
          setLoading({ ...loading, request: false })

        }
      } else {
        // setLoading({ ...loading, request: true })
        res = await getAllPostRequester(post._id, auth.user._id);
        console.log('res', res)
        if (res.error) {
          setErr(res.error.errMessage)
        } else if (res.payload) {
          setLoading({ ...loading, request: false })
          if (res.payload.length > 0) {
            setReqData(res.payload[0])

          } else {
            setErr("user not requested to this post")
          }
        }

      }
    };
    if (post._id && auth.user._id)
      fetchUserAllRequest()
  }, [post._id, auth.user._id])

  const onClickFavourit = (e) => {
    setisFavourite(!isFavourite)
    if (isFavourite)//plus one in favourit
    {

    } else {//minus one favourite

    }
  };



  // const updateUserData = async (userData) => {
  //   const res = await updateUser(data);
  //   if (res.error) {
  //     showNotification(res.error.errMessage)
  //     // setErr(res.error.errMessage)
  //   } else if (res.payload) {
  //     // showNotification("Profile Updated successfully")
  //   }
  // };

  if (auth.loading)
    return <Loader />
  if (!post._id || !auth.user._id)
    return null
  return (
    <>
      {
        (loading.post || loading.userData) ?
          <Loader />
          :
          post && userData._id ?
            <div className="w-[96%] ml-16 h-auto rounded-t-3xl flex  dark:text-white dark:bg-zinc-800 bg-white xs:w-full xs:flex-col xs:m-0 sm:m-0 sm:flex-col sm:w-full">
              <div className="flex flex-col w-3/5 xs:w-full sm:w-full">
                <div className=" h-auto p-1 xs:p-1 mx-2 ">
                  <div className="flex justify-between mx-3 py-2  items-center">
                    <h4 className="xs:text-xs text-[#6F6F6F]"> {post.postType == "learner" ? "I want to learn" : "I can teach"}</h4>
                    <i className="fa-sharp fa-solid fa-ellipsis-vertical text-xl xs:text-xs"></i>
                  </div>
                  <div className="bg-[#F8AF6A] dark:bg-slate-600 h-80  rounded-xl  mx-3 xs:w-[97%]  xs:m-1 sm:h-40">
                    <img src={cat_image0} className="w-full h-80 sm:h-40 rounded-xl"></img>
                  </div>
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
                      <div className="flex gap-1  items-center xs:gap-0 xs:text-[12px] ">
                        <h4>4</h4>
                        <label className="text-sm sm:text-[7px] text-[#6F6F6F]">(sits left)</label>
                      </div>


                      <div className="flex gap-1 items-center xs:gap-1 xs:text-xs">
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
                <div className="flex justify-between mx-1  p-3 xs:p-2">
                  <Link to={'/showProfile/' + post.createdTutor}>
                    <div className="flex items-center gap-2 xs:gap-1 cursor-pointer ">

                      <div className="bg-[#5a4a4a] relative dark:bg-orange-400 dark:text-white rounded-full h-14 w-14 xs:h-10 xs:w-10 ">
                        <h1 className="absolute right-5 bottom-4  sm:right-3 sm:bottom-2 font-semibold text-xl text-white p-1">K</h1>
                      </div>

                      {
                        loading.userData ?
                          <Loader />
                          :
                          <div className="flex flex-col xs:text-xs cursor-pointer">
                            <label>{userData.name}</label>
                            <label className="text-[#828282]">{userData.analytics.favorite} Favourite</label>
                          </div>
                      }
                    </div>
                  </Link>
                  <button
                    className={!isFavourite ? "bg-[#fd9331] text-white w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-9" : "bg-[#837e7a] text-white w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-9"}
                    onClick={(e) => onClickFavourit(e)}
                  >
                    {!isFavourite ? "Favourite" : "unfavourite"}
                  </button>
                </div>
                <div className="flex items-center mx-2 p-2 gap-3 xs:text-sm ">
                  <div className="flex p-1 gap-1 ">
                    <h3>286</h3>
                    <label>Comments</label>
                  </div>
                  <div className="flex gap-1 items-center">
                    <i className="fa-solid fa-bars-staggered"></i>{" "}
                    <label>Sort by</label>
                  </div>
                </div>
                <div className="flex flex-col mx-2">
                  <div className=" relative flex items-center p-2 gap-4">
                    <img
                      className="rounded-full h-16 w-16 xs:h-12 xs:w-12 border-2 border-red-500"
                      src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                      alt=""
                    />
                    <input
                      type="text"
                      placeholder="Add a public comment"
                      className="w-11/12 border-b-2 outline-none dark:bg-zinc-800 dark:border-white border-[#303030]">

                    </input>
                    <button className="absolute bg-orange-400 right-2 rounded-xl p-2 top-2 text-white xs:p-2 xs:text-xs ">Comment</button>
                  </div>
                  <div className="flex flex-col p-4 gap-4 xs:p-4 xs:gap-2 xs:overflow-y-auto">
                    {/* Comment card */}
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
                          <div className="text-lg font-extrabold"><i className="fa-solid fa-ellipsis-vertical"></i></div>
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
                          <div className="text-lg font-extrabold"><i className="fa-solid fa-ellipsis-vertical"></i></div>
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
                          <div className="text-lg font-extrabold"><i className="fa-solid fa-ellipsis-vertical"></i></div>
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
                loading.request || loading.userData ?
                  <Loader />
                  :
                  post.createdTutor == auth.user._id ? //user to see all request recieved from other learner of that post
                    <div className=" flex  flex-col w-2/5 p-2 xs:w-full xs:p-1 sm:w-full  ">
                      <h4 className="text-lg font-semibold mt-2">All your requests  </h4>
                      <div className="flex flex-col p-4 gap-4 xs:p-2 xs:gap-2 xs:overflow-y-auto">
                        <RecievedReq
                          requests={requests}
                        />
                      </div>
                    </div>
                    ://learner will see
                    reqData.reqAccept ?
                      <div className=" flex  flex-col w-2/5 p-2 xs:w-full xs:p-1 sm:w-full  ">
                        <h4 className="text-lg font-semibold mt-2">Your Request Accpeted</h4>
                        <SendReq
                          requests={[reqData]}
                        />
                      </div>
                      :
                      <ChoseSlot
                        post={post}
                        _reqData={reqData}
                        userData={userData}
                      />

              }


            </div >
            :
            <Loader />
      }
    </>
  );
};

export default Post;
