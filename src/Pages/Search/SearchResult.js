import { Radio } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { searchPost } from "../../App/postAPI";
import moment from "moment";
import { Link } from "react-router-dom";
const SearchResult = ({ search }) => {

  const [queryData, setQueryData] = useState({
    search: '',
    sort: '',
    type: 'posts',
    tags: '',
    limit: '',
    postType: '',
    page: 1
  })

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const onChangeFilter = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    const fetchSearchResult = async (e) => {
      const res = await searchPost(queryData);
      console.log('res', res)
      if (res.error) {

      } else if (res.payload) {
        if (queryData.type === 'users') {
          setUsers(res.payload)
        } else if (queryData.type === 'posts') {
          setPosts(res.payload)
        }
      }
    };
    fetchSearchResult()
  }, [queryData])

  const onLoadMore = () => {
    setQueryData({
      ...queryData,
      page: queryData.page + 1
    })
  };

  return (
    <>
    <div className="bg-white px-14 py-5 sm:px-2  w-full h-full ">
      <div id="outer" className=" w-[95%]  sm:mx-4 sm:full h-full  my-10">

        <div id="filter" className="p-5 flex">
          <div className="mx-2 relative  dark:bg-white dark:text-black text-sm  flex   w-96 sm:w-full items-center rounded-2xl  ">
            <input
              type="text"
              placeholder="search"
              name="search"
              className="w-full px-4 py-2 shadow-sm shadow-gray-500 border-slate-900  rounded-2xl outline-none"
              value={queryData.search}
              onChange={(e) => onChangeFilter(e)}
            ></input>

            <i className="fa-solid fa-magnifying-glass absolute right-2 p-2"></i>
          </div>
        </div>
        <div className="  flex  flex-row w-full h-auto  p-2  sm:flex-col sm:w-full ">
          <div id="recomendation " className=" w-[30%]  sm:w-full mx-2">
            <h1 className="text-red-600 text-xl">Apply Filter :</h1>

            <div className="p-1  h-auto w-full rounded-sm m-2 sm:flex flex-wrap   sm:w-full">
              <div className="  w-[95%] p-2  sm:w-[50%]">
                <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Sort by :</label>
                <select
                  placeholder="select option"
                  name="sort"
                  className="rounded-xl w-full shadow-sm shadow-black p-2"
                  onChange={(e) => onChangeFilter(e)}
                  value={queryData.sort}
                >
                  <option value={''}>Select</option>
                  <option value={'l2h'}>Low to High</option>
                  <option value={'h2l'}>High to Low</option>
                  <option value={'recent'}>Recent</option>
                  <option value={'older'}>Older</option>
                </select>
                {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
              </div>
              <div className="w-[85%] flex flex-col  p-2 xs:w-1/2">
                <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Search by :</label>

                <Radio.Group
                  buttonStyle="solid"
                  optionType="button"
                  name="type"
                  // defaultValue={reqData.reqAccept}
                  value={queryData.type}
                  onChange={(e) => onChangeFilter(e)}

                >
                  <Radio.Button
                    value='users'
                    style={{
                      // margin: 10
                    }}
                  >
                    Users
                  </Radio.Button>
                  <Radio.Button
                    value='posts'
                    style={{
                      // margin: 10
                    }}
                  >
                    Posts
                  </Radio.Button>

                </Radio.Group>
                {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
              </div>

              <div className="w-[85%] flex flex-col p-2 xs:w-1/2">
                <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Post type:</label>
                <Radio.Group
                  buttonStyle="solid"
                  optionType="button"
                  name="postType"
                  // defaultValue={reqData.reqAccept}
                  value={queryData.postType}
                  onChange={(e) => onChangeFilter(e)}
                >
                  <Radio.Button
                    value='learner'
                    style={{
                      // margin: 10
                    }}
                  >
                    Learner
                  </Radio.Button>
                  <Radio.Button
                    value='tutor'
                    style={{
                      // margin: 10
                    }}
                  >
                    Tutor
                  </Radio.Button>

                </Radio.Group>
                {/* <label className="text-xs ml-2 p-1">Select what is type of your post</label> */}
              </div>
            </div>


          </div>


          <div id="result " className="w-[70%] sm:w-full">
            <h1 className="text-red-600 text-xl ">Result</h1>



            {
              queryData.type === 'posts' ?

                posts.length > 0 ?
                  posts.map((item, i) => (
                    <Link to={"/postcontent/" + item._id} >
                    <div className="p-2 bg-blue-100 h-42  rounded-lg m-2 flex sm:w-full " key={i}>
                      <div className="flex  flex-row w-full">
                        <div className="bg-[#F8AF6A] w-[40%] h-34 rounded-lg"></div>
                        <div className="p-1 text-xs flex flex-col w-[60%] text-slate-600">
                          <span>{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                          <div className="flex flex-col p-1">
                            <h1 className="text-lg font-bold text-blue-900">
                              {item.postTitle}
                            </h1>
                            <span>{item.createdTutorName}</span>
                            <div className="flex flex-row">
                              <span className="bg-[#05FF00] w-2 h-2 rounded-lg"></span>
                              <span className="">online </span>
                            </div>
                            <div className="flex  gap-1 items-center xs:gap-1 xs:text-xs rounded-3xl p-1 bg-[#FFFFFF]  m-1 w-24 font-bold text-orange-400">
                              {" "}
                              <i className="fa-solid fa-indian-rupee-sign"></i>
                              <label className="text-lg">
                                {item.charges}<span className="text-xs font-thin">-/</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></Link>
                  ))
                  :
                  <p>There is no result for {queryData.search}</p>
                :
                users.length > 0 ?
                  users.map((item, i) => (
                    <div className="p-2 bg-blue-100 h-42 w-auto rounded-lg m-2 flex  ">
                      <div className="flex  flex-row w-82">
                        <img
                          className="rounded-full h-32 w -32 mx-10 border-red-600 border-2"
                          src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                          alt=""
                        />
                        <div className="p-1 text-xs flex flex-col text-slate-600 py-8">
                          <div className="flex flex-col p-1">
                            <h1 className="text-lg font-bold text-blue-900">
                              {item.name}
                            </h1>
                            <span>{item.analytics.favorite}</span>
                            <span className="">online</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>There is no result for {queryData.search}</p>
            }
            {/* <p onClick={() => onLoadMore()} >load more...</p> */}

          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default SearchResult;
