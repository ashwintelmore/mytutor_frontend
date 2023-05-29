import { Radio } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { searchPost } from "../../App/postAPI";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Helper/Loader";
import { getAlllCatgories } from "../../App/category.Api";
import { postImgCollection } from "../../assets/postImages/postImg";
import cat_image1 from "../Posts/../../assets/user.png";
import { getTimeAgo } from "../../Components/Helper/helper";


const SearchResult = ({ search, category = "" }) => {
  const params = useParams();
  const [queryData, setQueryData] = useState({
    search: "",
    sort: "",
    type: "posts",
    tags: "",
    limit: "",
    postType: "",
    page: 1,
    category: params.catName ? params.catName : "",
  });
  console.log("queryData", queryData);
  const [loader, setLoader] = useState({
    posts: false,
    user: false,
  });

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const onChangeFilter = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchSearchResult = async (e) => {
      setLoader({ ...loader, posts: true });
      const res = await searchPost(queryData);
      console.log("res", res);
      if (res.error) {
        setLoader({ ...loader, posts: false });
      } else if (res.payload) {
        setLoader({ ...loader, posts: false });
        if (queryData.type === "users") {
          setUsers(res.payload);
        } else if (queryData.type === "posts") {
          setPosts(res.payload);
        }
      }
    };
    fetchSearchResult();
  }, [queryData]);

  const onLoadMore = () => {
    setQueryData({
      ...queryData,
      page: queryData.page + 1,
    });
  };
  const [cats, setCats] = useState([]);

  //fetch all categoreis
  useEffect(() => {
    const fetchAllCats = async () => {
      const res = await getAlllCatgories();
      if (res.error) {
        // showNotification(res.error.errMassege)
      } else if (res.payload) {
        setCats(res.payload);
      }
    };
    fetchAllCats();
  }, []);

  console.log('posts', posts)

  return (
    <>
      <div className="bg-white ml-16 sm:ml-0 flex justify-center py-5 sm:px-2 dark:bg-color-11 transition-all duration-500 ease-in-out  rounded-3xl dark:text-white  w-full h-full ">
        <div id="outer" className=" w-[90%] dark:bg-color-11 transition-all duration-500 ease-in-out sm:mx-4 sm:full h-full bg-white  my-10">
          <div id="filter" className="p-5 flex">
            <div className="mx-2 relative dark:bg-color-11 dark:bg-white dark:text-black text-sm  flex   w-96 sm:w-full items-center rounded-2xl  ">
              <input
                type="text"
                placeholder="search"
                name="search"
                className="w-full px-4 py-2 transition-all ease-in-out border-[#4f6da877] focus:ring-[#6868ea] bg-color-3  duration-500 focus:border-color-17 border-[2px] outline-none dark:border-2 dark:border-white dark:text-white dark:bg-color-11 rounded-2xl "
                value={queryData.search}
                onChange={(e) => onChangeFilter(e)}></input>

              <i className="fa-solid fa-magnifying-glass active cursor-pointer absolute dark:text-white right-2 p-2"></i>
            </div>
          </div>
          <div className="  flex  flex-row w-full h-auto  p-2  sm:flex-col sm:w-full ">
            {/* left hand side of search */}
            <div id="recomendation " className=" w-[30%]  sm:w-full mx-2">
              <h1 className="text-color-13 text-xl">Apply Filter :</h1>

              <div className="p-1   h-auto w-full rounded-sm m-2 sm:m-0 sm:flex flex-wrap sm:flex-wrap sm:text-xs sm:items-center  sm:w-full">
                <div className="  w-[98%] p-2  sm:w-[50%]">
                  <label
                    className="w-full p-2 text-base xs:text-base"
                    htmlFor="slots">
                    Sort by :
                  </label>
                  <select
                    placeholder="select option"
                    name="sort"
                    className="rounded-xl w-full  dark:bg-color-11 dark:border transition-all ease-in-out border-[#4f6da877] focus:ring-[#6868ea] bg-color-3  duration-500 focus:border-color-17 border-[2px] outline-none p-2"
                    onChange={(e) => onChangeFilter(e)}
                    value={queryData.sort}>
                    <option value={""}>Select</option>
                    <option value={"l2h"}>Low to High</option>
                    <option value={"h2l"}>High to Low</option>
                    <option value={"recent"}>Recent</option>
                    <option value={"older"}>Older</option>
                  </select>
                  {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
                </div>

                <div className="  w-[95%] p-2  sm:w-[50%]">
                  <label
                    className="w-full p-2 text-sm "
                    htmlFor="slots">
                    Select Category :
                  </label>
                  <select
                    placeholder="select option"
                    name="category"
                    className="rounded-xl dark:bg-color-11 dark:border  w-full transition-all ease-in-out border-[#4f6da877] focus:ring-[#6868ea] bg-color-3  duration-500 focus:border-color-17 border-[2px] outline-none p-2"
                    onChange={(e) => onChangeFilter(e)}
                    value={queryData.category}>
                    <option value={""}>All</option>
                    {cats.map((item, i) => (
                      <option value={item.catName} key={i}>
                        {item.catName}
                      </option>
                    ))}
                  </select>
                  {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
                </div>

                <div className="w-[85%] flex flex-col  p-2 xs:w-1/2">
                  <label
                    className="w-full p-2 text-base xs:text-base"
                    htmlFor="slots">
                    Search by :
                  </label>

                  <Radio.Group
                    buttonStyle="solid"
                    optionType="button"
                    name="type"
                    // defaultValue={reqData.reqAccept}
                    value={queryData.type}
                    onChange={(e) => onChangeFilter(e)}>
                    <Radio.Button
                      value="users"
                      style={
                        {
                          // margin: 10
                          
                        }
                      }>
                      Users
                    </Radio.Button>
                    <Radio.Button
                      value="posts"
                      style={
                        {
                          // margin: 10
                        }
                      }>
                      Posts
                    </Radio.Button>
                  </Radio.Group>
                  {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
                </div>

                <div className="w-[85%] flex flex-col p-2 xs:w-1/2">
                  <label
                    className="w-full p-2 text-base sm:w-full xs:text-base"
                    htmlFor="slots">
                    Post type:
                  </label>
                  <Radio.Group
                    buttonStyle="solid"
                    optionType="button"
                    name="postType"
                    // defaultValue={reqData.reqAccept}
                    value={queryData.postType}
                    onChange={(e) => onChangeFilter(e)}>
                    <Radio.Button
                      value="learner"
                      style={
                        {
                          // margin: 10
                        }
                      }>
                      Learner
                    </Radio.Button>
                    <Radio.Button
                      value="tutor"
                      style={
                        {
                          // margin: 10
                        }
                      }>
                      Tutor
                    </Radio.Button>
                  </Radio.Group>
                  {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
                </div>
              </div>
            </div>
            {/* right hand side of search */}
            {loader.posts ? (
              <Loader />
            ) : (
              <div id="result " className="w-[70%] sm:overflow-y-auto dark:bg-color-11  sm:w-full">
                <h1 className="text-color-13 text-xl px-3  ">Result</h1>
                {queryData.type === "posts" ? (
                  posts.length > 0 ? (
                    posts.map((item, i) => (
                      <Link to={"/postcontent/" + item._id}>
                        <div
                          className="p-2 sm:py-2 sm:m-1 w-[70%]  bg-color-3 transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-[#5d899795] h-auto dark:bg-color-11 dark:border dark:text-white rounded-lg m-2 flex sm:w-full "
                          key={i}>
                          <div className="flex items-center  flex-row w-full">
                            <div className=" relative  w-[40%] h-full sm:w-1/2 rounded-lg">
                              <img
                                src={
                                  item.thumbnailUrl &&
                                  postImgCollection[item.thumbnailUrl.image]
                                }
                                className="   w-auto rounded-xl sm:h-full sm:w-full "></img>
                              <span className="font-semibold  absolute  text-white font-font-logo top-7 sm:top-4 sm:line-clamp-1  w-[35%] left-3 line-clamp-3 text-sm xs:text-xs ">
                                {item.postTitle}
                              </span>
                              <div className="flex gap-2 sm:gap-[2px] items-center absolute  bottom-3 sm:bottom-2 sm:left-2  left-3">
                                <img
                                  src={cat_image1}
                                  className="h-5 sm:h-3 sm:w-3 w-5"></img>
                                <label className="font-font-logo sm:text-xs text-white">
                                  {item.createdTutor.name}
                                </label>
                              </div>
                            </div>
                            <div className="p-1 text-xs flex flex-col w-[60%] sm:w-1/2 sm:gap-2  dark:text-white">
                              <span className="sm:text-xs">
                                {getTimeAgo(item.createdAt)}
                              </span>
                              <div className="flex flex-col p-1">
                                <h1 className="text-lg font-bold dark:text-white line-clamp-2 sm:text-xs  text-blue-900">
                                  {item.postTitle}
                                </h1>
                                <span className="text-base sm:text-xs">
                                  {item.createdTutor.name}
                                </span>
                                <div className="flex  sm:w-fit gap-1 items-center xs:gap-1 xs:text-xs  px-3 bg-white dark:bg-color-11 text-color-4 rounded-xl   dark:border dark:border-white  w-fit font-bold ">
                                  {" "}
                                  <label className="text-lg sm:text-xs sm:w-fit px-5">
                                    <i className="fa-solid fa-indian-rupee-sign   dark:text-white"> </i>
                                    {item.charges}
                                    <span className="text-xs font-thin  dark:text-white">
                                      -/
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>There is no result for {queryData.search}</p>
                  )
                ) : users.length > 0 ? (
                  users.map((item, i) => (
                    <Link to={"/showProfile/" + item._id}>
                      <div className="p-2 bg-color-3 h-42 w-auto rounded-lg m-2 flex  ">
                        <div className="flex items-center  flex-row w-82">
                          <div className="bg-color-14 relative dark:bg-orange-400 dark:text-white rounded-full h-14 w-14 xs:h-10 xs:w-10 ">
                            <h1 className="absolute right-5 bottom-3  sm:right-3 sm:bottom-1 font-semibold text-xl text-white p-1">K</h1>
                          </div>
                          <div className="p-1 text-xs flex flex-col text-slate-600 py-8">
                            <div className="flex flex-col p-1">
                              <h1 classNamecmd="text-lg font-bold text-blue-900">
                                {item.name}
                              </h1>
                              <span>{item.analytics.favorite} favorite</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>There is no result for {queryData.search}</p>
                )}
                <p onClick={() => onLoadMore()}>load more...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
