import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, getUserAllPosts } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import { ConfigProvider, FloatButton } from "antd";
import { useUserData } from "../../providers/userData";
import Loader, { LoaderSmall } from "../../Components/Helper/Loader";
import cat_image0 from "../Posts/../../assets/cat_image0.jpeg";


function AllPost({ resPost = false, isEditable = true }) {
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState({
    post: false
  })
  const [err, setErr] = useState('')
  const auth = useAuth()
  const userData = useUserData()
  useEffect(() => {
    const getallpost = async (id) => {
      setLoader({ ...loader, post: true })
      const res = await getUserAllPosts(id);
      if (res.error) {
        setLoader({ ...loader, post: false })
        setErr(res.error.errMessage)
      } else if (res.payload) {
        setLoader({ ...loader, post: false })
        setPosts(res.payload)
      }
    };

    if (!resPost) {
      isEditable ? getallpost(auth.user._id) : getallpost(userData.userDetails._id)
    }
    else
      setPosts(resPost)
    return () => {

    };
  }, [])

  if (loader.post) {
    return <LoaderSmall />
  }
  return (
    <div className=" w-full p-4 flex flex-col gap-4 overflow-scroll xs:w-full xs:p-1 xs:ml-1">
      {
        posts.length > 0 ?
          posts.map((item, i) => (
            <Link to={'/postcontent/' + item._id}>
              <div className="flex flex-col  gap-3 bg-indigo-100 dark:bg-zinc-700 dark:shadow-sm w-4/6 p-2 rounded-2xl shadow-md shadow-slate-400 xs:w-full xs:text-xs" key={i}>
                <div className="flex justify-between px-2 py-1">
                  <span className="text-xs">{item.createdAt}</span>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="flex w-full gap-2">
                  <div className="h-32 w-2/5  sm:h-auto  dark:bg-violet-200 bg-orange-400   rounded-xl">
                    {/* thanmbail image */}
                    <img src={cat_image0} className="h-32 w-full rounded-xl sm:h-32 "></img>
                  </div>
                  <div className="flex flex-col w-[60%] p-1 sm:gap-2 gap-1 ">

                    <span className="font-semibold xs:text-xs text-lg">
                      {item.postTitle}
                    </span>
                    <span className="text-sm">{item.createdTutorName}</span>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-green-500  h-2 w-2"></div>
                      <label>Online</label>
                    </div>
                    <button className="bg-white text-orange-400 w-36 xs:w-28 rounded-xl p-1 dark:bg-zinc-900">
                      Rs.{item.pricePerHour || item.charges}(per hour)
                    </button>
                  </div></div>
              </div>
            </Link>
          ))
          :
          <p> No data available {err}</p>
      }
    </div>
  );
}

export default AllPost;
