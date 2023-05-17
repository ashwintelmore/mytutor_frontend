import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import cat_image1 from "../Posts/../../assets/user.png";
import cat_image3 from "../Posts/../../assets/cat_image3.jpg";
import cat_image4 from "../Posts/../../assets/cat_image4.jpg";
import cat_image5 from "../Posts/../../assets/cat_image5.jpg";
// import cat_image0 from "../Posts/../../assets/cat_image0.jpeg";
import cat_image0 from "../Posts/../../assets/Thumbnail1.png";
import cat_image7 from "../Posts/../../assets/cat_image7.jpg";
import cat_image8 from "../Posts/../../assets/cat_image8.jpg";

import { Link } from "react-router-dom";
import { getAllPosts } from "../../App/postAPI";
import { useAuth } from "../../providers/auth";
import Loader from "../../Components/Helper/Loader";
import { useAlert } from "../../Components/Alert";
import { getAlllCatgories, getCatgory } from "../../App/category.Api";
import { postImgCollection } from "../../assets/postImages/postImg";

const Home = () => {
  const auth = useAuth();
  const [showAlert, renderAlert] = useAlert();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState({
    posts: false,
  });
  const [err, setErr] = useState("");
  useEffect(() => {
    const getallpost = async () => {
      setLoader({ ...loader, posts: true });
      const res = await getAllPosts();
      if (res.error) {
        //handle error
        showAlert(res.error.errMessage);
        setLoader({ ...loader, posts: false });
      } else if (res.payload) {
        //handle sussece responce
        setPosts(res.payload);
        setLoader({ ...loader, posts: false });
      }
    };
    if (!posts.length) getallpost();
  }, [posts]);

  const bufferToImage = (bufferData) => {
    return `data:${bufferData.image.contentType};base64, ${Buffer.from(
      bufferData.image.data.data
    ).toString("base64")}`;
  };

  const [img, setImg] = useState("");
  useEffect(() => {
    const getallpost = async () => {
      // setLoader({ ...loader, posts: true })
      const res = await getAlllCatgories();
      if (res.error) {
      } else if (res.payload) {
        // setImg(`data:${res.payload[0].image.contentType};base64, ${Buffer.from(res.payload[0].image.data.data).toString('base64')}`)
        // setImg({ data: res.payload.image.contentType ;base64, ${ Buffer.from(user.userPhoto.data).toString('base64') }
        setCategories(res.payload);
      }
    };

    getallpost();
  }, []);
  console.log("posts", posts);
  // if (auth.loading)
  //   return <Loader />
  return (
    <div className="home w-[95%] sm:relative ml-16 sm:w-full sm:m-1 xs:p-1  h-auto bg-white light dark:text-white dark:bg-color-11  p-2 rounded-t-3xl  ">
      {renderAlert}
      {/* category card  box*/}
      <div className="flex mt-3  overflow-y-hidden dark:text-slate-100">
        {categories.map((item, i) => (
          <Link to={"/search/" + item.catName} key={i}>
            <div className="relative w-max flex m-4 justify-center sm:m-1 ">
              <div className="w-44 h-44 rounded-full dark:bg-color-2 border-2 border-color-4 bg-color-4 xs:w-32 xs:h-323 ">
                <img
                  className="w-full h-full rounded-full"
                  src={bufferToImage(item)}
                  alt="student"
                />
              </div>
              <div className="absolute text-center p-2 bottom-0 dark:bg-amber-500 h-10  w-28  bg-white shadow-sm sha shadow-color-6 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
                {item.catName}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {loader.posts ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap  mt-3 sm:w-full sm:h-auto sm:mt-1 font-semibold overflow-y-auto  sm:overflow-y-auto w-full xs:w-full xs:mt-2   ">
          {/* one post card */}
          {posts.length > 0 ? (
            posts.map((item, i) => (
              <div
                className="w-[24.8%]  h-auto  p-1 sm:p-px sm:w-[49%]  sm:text-sm  sm:h-auto "
                key={i}>
                <Link to={"/postcontent/" + item._id}>
                  <div className="h-auto p-3 w-full  sm:p-1 xs:m-1 m-2   dark:shadow-md dark:bg-color-9 bg-color-9  rounded-2xl flex flex-col   ">
                    <div className="flex justify-between sm:text-xs sm:px-1 sm:py-1">
                      <span className="sm:text-xs text-color-3 px-2 font-normal  text-[12px]">
                        {item.postType == "learner"
                          ? "I want to learn"
                          : "I can teach"}
                      </span>
                      <i className="fa-solid fa-ellipsis-vertical px-2 sm:text-xs text-white text-lg"></i>
                    </div>
                    <div className=" relative h-auto w-full sm:max-w-[100%] mx-auto my-3 dark:bg-violet-200  rounded-2xl">
                      <img
                        src={postImgCollection[item.thumbnailUrl?.image]}
                        className=" h-auto   rounded-2xl w-full"></img>
                      <span className="   absolute sm:text-xs top-10 sm:top-4 sm:left-2  left-3 font-font-logo text-white w-[40%] line-clamp-3 text-lg ">
                        {item.postTitle}
                      </span>

                      <div className="flex gap-2 sm:gap-[2px] items-center absolute  bottom-3 sm:bottom-2 sm:left-2  left-3">
                        <img src={cat_image1} className="h-5 sm:h-3 sm:w-3 w-5"></img>
                        <label className="font-font-logo sm:text-xs text-white">Username</label>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm ">
                      <div className="flex flex-col   ">
                        <span className=" font-[550] px-1 text-white sm:text-sm sm:font-normal line-clamp-2 text-[18px] ">
                          {item.postTitle}
                        </span>
                        <span className="text-white px-2 text-lg text-[14px] sm:text-xs  font-normal">
                          {item.createdTutor.name}
                        </span>
                      </div>

                    </div>
                    <div className="flex justify-between p-1  item-center xs:text-[10px] ">
                      {/* <label className="sm:font-medium  sm:text-[#30f830]">
                        {item.createdTutor.analytics.favorite} favorite
                      </label> */}
                      <div className="flex gap-1 items-center">
                        <di className="h-4 w-4 bg-color-10 rounded-full sm:h-2 sm:w-2"></di>
                        <label className="text-sm sm:text-xs text-white font-light">{item.createdTutor.analytics.favorite} favorite</label>
                      </div>
                      <button className="bg-white text-color-4 sm:w-auto px-7  sm:px-3  rounded-xl p-1 dark:bg-color-2 dark:border">
                        Rs.{item.pricePerHour || item.charges}/-
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No Data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
