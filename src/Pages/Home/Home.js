import React, { useState, useEffect } from "react";
import { Buffer } from 'buffer'; import cat_image1 from "../Posts/../../assets/cat_image1.png";
import cat_image3 from "../Posts/../../assets/cat_image3.jpg";
import cat_image4 from "../Posts/../../assets/cat_image4.jpg";
import cat_image5 from "../Posts/../../assets/cat_image5.jpg";
import cat_image0 from "../Posts/../../assets/cat_image0.jpeg";
import cat_image7 from "../Posts/../../assets/cat_image7.jpg";
import cat_image8 from "../Posts/../../assets/cat_image8.jpg";



import { Link } from "react-router-dom";
import { getAllPosts } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import Loader from "../../Components/Helper/Loader";
import { useAlert } from "../../Components/Alert";
import { getCatgory } from "../../App/category.Api";

const Home = () => {
  const auth = useAuth()
  const [showAlert, renderAlert] = useAlert()
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState({
    posts: false,
  })
  const [err, setErr] = useState('')
  useEffect(() => {
    const getallpost = async () => {
      setLoader({ ...loader, posts: true })
      const res = await getAllPosts();
      if (res.error) {
        //handle error
        showAlert(res.error.errMessage)
        setLoader({ ...loader, posts: false })
      } else if (res.payload) {
        //handle sussece responce
        setPosts(res.payload)
        setLoader({ ...loader, posts: false })
      }
    };
    if (!posts.length)
      getallpost()
  }, [posts])


  const [img, setImg] = useState('')
  useEffect(() => {
    const getallpost = async () => {
      // setLoader({ ...loader, posts: true })
      const res = await getCatgory('6457703d68265cf2131f0445');
      console.log('res', res)
      if (res.error) {
      } else if (res.payload) {
        setImg(`data:${res.payload[0].image.contentType};base64, ${Buffer.from(res.payload[0].image.data.data).toString('base64')}`)
        // setImg({ data: res.payload.image.contentType ;base64, ${ Buffer.from(user.userPhoto.data).toString('base64') }
      }

    }

    getallpost();
  }, [])
  // if (auth.loading)
  //   return <Loader />
  return (
    <div className="home w-[95%] sm:relative ml-16 sm:w-full sm:m-1 xs:p-1  h-auto bg-white light dark:text-white dark:bg-neutral-800  p-2 rounded-t-3xl  ">
      {renderAlert}
      {/* category card  box*/}
      <div className="flex mt-3  overflow-y-hidden dark:text-slate-100">

        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 h-44 rounded-full dark:bg-purple-200 border-2 border-[#40B59F] bg-[#00FF46] xs:w-32 xs:h-32
          
          
          3 ">
            <img className="w-full h-full rounded-full" src={cat_image0} alt="student" />
          </div>
          <div className="absolute text-center p-2 bottom-0 dark:bg-amber-500 h-10  w-28  bg-white shadow-sm shadow-black rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>

        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 rounded-full sm:w-36 sm:h-36  dark:bg-purple-200 border-2 border-[#40B59F] bg-[#DBFF00] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image1} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Singing
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#FF942E] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image3} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Psychologist
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  sm:m-1 ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#00B2FF] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image4} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Music
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 border-2 border-[#40B59F] rounded-full dark:bg-purple-200  bg-[#FF00D6] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image5} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Sports
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 sm:w-36 sm:h-36 h-44 border-2 border-[#40B59F] rounded-full  dark:bg-purple-200 bg-[#EBFF00] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image7} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Personality
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#A06AF8] xs:w-32 xs:h-32 ">
            <img className="w-full h-full rounded-full" src={cat_image8} />
          </div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Food
          </div>
        </div>

      </div>
      {
        loader.posts ?
          <Loader />
          :
          <div className="flex flex-wrap  mt-3 sm:w-full sm:h-auto sm:mt-1 font-semibold overflow-y-auto  sm:overflow-y-auto w-full xs:w-full xs:mt-2   ">
            {/* one post card */}
            {
              posts.length > 0 ?
                posts.map((item, i) => (
                  <div className="w-[24.8%] h-auto  p-1 sm:w-[49%]  sm:text-sm xs:w-1/2 sm:h-auto xs:text-xs"
                    key={i}
                  >
                    <Link to={"/postcontent/" + item._id} ><div className="h-auto p-3 w-full sm:p-2 xs:m-1 m-2 shadow-md dark:shadow-sm dark:bg-zinc-700 bg-[#FEE4CB] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-1 ">
                      <div className="flex justify-between sm:text-xs xs:text-xs">
                        <span className="sm:text-xs text-[#6F6F6F]">{item.postType == "learner" ? "I want to learn" : "I can teach"}</span>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                      <div className="h-56 sm:h-auto relative  sm:h-24 w-full mx-auto my-3 dark:bg-violet-200 bg-[#F8AF6A] rounded-2xl"> 
                      <img src={cat_image0} className=" h-full  sm:h-40 rounded-2xl w-full" ></img>
                      <span className=" absolute sm:text-xs bottom-24 left-7 font-thin  text-base ">{item.postTitle}</span>

                      </div>
                      <div className="flex justify-between text-sm ">
                        <div className="flex flex-col  ">
                          {/* <span className=" sm:text-xs font-thin text-base ">{item.postTitle}</span> */}
                          <span className="text-[#6F6F6F] text-lg sm:text-[10px]">{item.createdTutorName}</span>
                        </div>
                        <div className="flex items-center font-thin gap-2 p-2 text-lg className  xs:text-xs">
                          <span >69</span>
                          <i className="fa-solid fa-thumbs-up text-[#EDA600]"></i>
                        </div>
                      </div>
                      <div className="flex justify-between p-1  item-center xs:text-[10px] ">
                        <label className="font-thin">Online</label>
                        <button className="bg-white font-semibold text-sm shadow-sm px-2 py-1 shadow-black text-[#F8AF6A] rounded-xl  dark:bg-zinc-900 dark:border dark:border-white  sm:text-[10px] sm:w-auto sm:p-px xs:text-xs">
                          Rs.{item.pricePerHour || item.charges}(per hour)
                        </button>
                      </div>
                    </div></Link>
                  </div>
                ))
                :
                <p>No Data available</p>
            }

          </div>
      }
    </div >
  );
};

export default Home;
