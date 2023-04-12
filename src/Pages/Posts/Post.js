import React from "react";

const Post = () => {
  return (
    <div className="Post ml-16 h-auto rounded-t-3xl flex  dark:text-white dark:bg-zinc-800 bg-white xs:w-full xs:flex-col xs:m-0 sm:m-0 sm:flex-col sm:w-full">
      <div className="flex flex-col w-3/5 xs:w-full sm:w-full">
        <div className=" h-auto p-1 xs:p-1 ">
          <div className="flex justify-between  p-2 m-1 items-center">
            <h4 className="xs:text-xs text-[#6F6F6F]"> May 5, 2023</h4>
            <i className="fa-sharp fa-solid fa-ellipsis-vertical xs:text-xs"></i>
          </div>
          <div className="bg-[#F8AF6A] dark:bg-slate-600 h-80 p-2 rounded-xl  m-4 xs:w-[97%]  xs:m-1 sm:h-40"></div>
          <div className="flex justify-between p-1 mx-1 items-center text-xl sm:text-xs xs:p-0">
            <h1 className="  font-semibold  sm:text-xs">
              What is Design thinking ?
            </h1>
            <div className="flex   items-center gap-5 p-2 xs:gap-0  xs:p-1 sm:text-xs  sm:gap-1 px-4 ">
              <div className="flex  gap-1 items-center xs:gap-0 sm:text-xs">
                <i className="fa-solid fa-indian-rupee-sign text-[#FFB300] sm:text-xs">
                  59
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
            Discription Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi eget ex in tortor tincidunt consectetur. Etiam at viverra
            justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Fusce rutrum condimentum dictum.
            Nullam lobortis lectus ut pretium accumsan. Proin eu elementum erat,
            eget dapibus dolor. Aliquam erat volutpat.
          </p>
        </div>
        <div className="flex justify-between  p-3 xs:p-2">
          <div className="flex items-center gap-2 xs:gap-1 ">
            <div className="bg-[#D9D9D9] rounded-full h-14 w-14 xs:h-10 xs:w-10 "></div>
            <div className="flex flex-col xs:text-xs">
              <label>Tutor Name</label>
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
          <div className=" flex items-center p-2 gap-4">
            <img
              className="rounded-full h-16 w-16 xs:h-12 xs:w-12 border-2 border-red-500"
              src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
              alt=""
            />
            <input
              type="text"
              placeholder="Add a public comment"
              className="w-11/12 border-b-2 outline-none border-[#303030]"></input>
          </div>
          <div className="flex flex-col p-4 gap-4 xs:p-2 xs:gap-2 xs:overflow-y-auto">
            <div className="flex flex-col  gap-1 ">
              <div className="flex  gap-2  ">
                <img
                  className="rounded-full h-14 w-14 xs:h-10 xs:w-10 border-2 border-red-500"
                  src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                  alt=""
                />
                <div className="flex flex-col text-xs">
                  <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                  <p className="text-sm">Something bio details</p>
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
                <div className="flex flex-col text-xs">
                  <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                  <p className="text-sm">Something bio details</p>
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
                <div className="flex flex-col text-xs">
                  <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                  <p className="text-sm">Something bio details</p>
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
                <div className="flex flex-col text-xs">
                  <h3 className="text-violet-800 ">Ashwin Telmore</h3>
                  <p className="text-sm">Something bio details</p>
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

      <div className=" flex  flex-col w-2/5 p-2 xs:w-full xs:p-1 sm:w-full  ">
        <h4 className="text-lg font-semibold mt-2">Select available dates</h4>
        <div className="flex flex-wrap dark:bg-orange-300 dark:text-black bg-green-200 p-4 gap-2 text-lg font-semibold rounded-2xl xs:gap-1 xs:p-2 xs:font-normal sm:text-xs sm:p-2 sm:gap-1 ">
          <span className="h-16 w-16 p-4  xs:h-11 xs:w-11 xs:p-1 bg-slate-400 dark:border-black rounded-full ">
            Mon
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Tue
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Wed
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Thur
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Fri
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Sat
          </span>
          <span className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-400 rounded-full">
            Sun
          </span>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            1
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            2
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            3
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            4
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            5
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            6
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            7
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            8
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            9
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            10
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            11
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            12
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            13
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            14
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            15
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            16
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            17
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            18
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            19
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            20
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            21
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            22
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            23
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            24
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            24
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            26
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            27
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            28
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            29
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            30
          </button>
          <button className="h-16 w-16 p-4   xs:h-11 xs:w-11 xs:p-1 bg-slate-50 rounded-full">
            31
          </button>
        </div>
        <div className="flex flex-col p-3 xs:p-1  xs:mt-3 xs:gap-2">
          <h3 className="font-semibold">Select Available Time Slot</h3>
          <div className="w-full xs:w-full  h-auto p-2 xs:p-1 flex flex-wrap gap-2 xs:gap-1 justify-evenly dark:text-black ">
            <button className="w-2/5 xs:w-2/5 xs:text-xs  rounded-2xl text-black font-semibold bg-white shadow-sm shadow-slate-500 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 xs:w-2/5 xs:text-xs rounded-2xl text-black font-semibold bg-white shadow-sm shadow-slate-500  dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 xs:w-2/5 xs:text-xs rounded-2xl text-black font-semibold bg-white shadow-sm shadow-slate-500 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 xs:w-2/5 xs:text-xs rounded-2xl text-black font-semibold bg-white shadow-sm shadow-slate-500 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
          </div>
        </div>
        <div className="p-3 w-4/5 flex flex-col gap-1">
          <h3 className="font-semibold">Message</h3>
          <input
            className="w-full p-2 rounded-2xl outline-none shadow-sm shadow-slate-500"
            placeholder="Write something..."
            type={Text}></input>
        </div>
        <div className="flex justify-center">
          <button className="w-32 h-10 bg-[#F8AF6A] text-white font-semibold dark:text-black  rounded-lg p-1">
            Book Slot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
