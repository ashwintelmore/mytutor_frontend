import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home  sm:relative ml-16 sm:w-full sm:m-2 xs:m-2 h-auto bg-white light dark:text-white dark:bg-neutral-800  p-4 rounded-t-3xl  ">
      <div className="flex w-full sm:text-sm sm:sticky top-0  justify-between p-2 xs:items-center xs:font-semibold">
        <div className="flex-col text-lg sm:text-sm  ">
          <h1 className="font-bold text-2xl sm:text-xl">Results</h1>
          <div className="flex gap-4 text-semibold text-lg  xs:gap-2 sm:text-base">
            <span className="flex flex-col  items-center">
              <h4>65</h4>
              <p>online</p>
            </span>
            <span className="flex flex-col  items-center">
              <h4>12</h4>
              <p>offline</p>
            </span>
            <span className="flex flex-col  items-center">
              <h4>88</h4>
              <p>Total</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-lg xs:gap-2 sm:text-base">
          <h3 className="text-right p-1 ">December , 15</h3>
          <div className="flex justify-evenly">
            <Link to={"/dummy"}>
              <i className="fa-solid fa-list"></i>
            </Link>
            <Link to={"/dummy"}>
              <i className="fa-solid fa-list"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-3  overflow-y-hidden dark:text-slate-100">

        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 h-44 rounded-full dark:bg-purple-200 border-2 border-[#40B59F] bg-[#00FF46] xs:w-32 xs:h-32 sm:w-36 sm:h-36 "></div>
          <div className="absolute text-center p-2 bottom-0 dark:bg-amber-500 h-10  w-28  bg-white shadow-sm shadow-black rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>

        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 rounded-full sm:w-36 sm:h-36  dark:bg-purple-200 border-2 border-[#40B59F] bg-[#DBFF00] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Singing
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#FF942E] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
          Psychologist
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  sm:m-1 ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#00B2FF] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Music
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 border-2 border-[#40B59F] rounded-full dark:bg-purple-200  bg-[#FF00D6] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Sports
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1 ">
          <div className="w-44 sm:w-36 sm:h-36 h-44 border-2 border-[#40B59F] rounded-full  dark:bg-purple-200 bg-[#EBFF00] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Personality
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center sm:m-1  ">
          <div className="w-44 h-44 sm:w-36 sm:h-36 rounded-full border-2 border-[#40B59F]  dark:bg-purple-200 bg-[#A06AF8] xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-2 bottom-0 h-10  w-28  bg-white shadow-sm shadow-black  dark:bg-amber-500  rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Food
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap  mt-3 sm:w-full sm:h-auto sm:mt-1 font-semibold overflow-y-auto  sm:overflow-y-auto w-full xs:w-full  ">
        <div className="w-1/4 h-80  p-1 sm:w-1/2 sm:h-auto sm:text-base xs:w-1/2 xs:h-auto xs:text-xs">
      <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-sm dark:bg-zinc-700 bg-[#FEE4CB] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24 w-full mx-auto my-3 dark:bg-violet-200 bg-[#F8AF6A] rounded-2xl"></div>
            <div className="flex justify-between text-sm ">
              <div className="flex flex-col  xs:text-xs">
                <span className="xs:text-xs sm:text-sm font-bold ">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F] sm:text-sm">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className  xs:text-xs">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid sm:text-xs xs:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80  p-1 sm:w-1/2 sm:h-auto sm:text-base xs:w-1/2 xs:h-auto xs:text-xs">
      <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#C9ECFF] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24  w-full mx-auto my-3 dark:bg-violet-200 bg-[#006DFF] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs font-bold text-base sm:text-sm">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F] sm:text-sm">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg   xs:text-xs">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80  p-1 sm:h-auto sm:w-1/2 xs:w-1/2 sm:text-base xs:h-auto xs:text-xs">
        <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#E0FFDB] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex sm:text-sm justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24  w-full mx-auto my-3 dark:bg-violet-200 bg-[#00FF47] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col  xs:text-xs">
                <span className="xs:text-xs sm:text-sm font-bold text-base">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className  ">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80  p-1 sm:h-auto sm:w-1/2 sm:text-base xs:w-1/2 xs:h-auto xs:text-xs">
        <Link to={"/content"} ><div className="h-auto p-3 sm:p-2 w-full  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#FECBCB] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24  w-full mx-auto my-3 dark:bg-violet-200 bg-[#F86A6A] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs sm:text-sm font-bold text-base">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className xs:text-xs ">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80 sm:h-auto sm:w-1/2 sm:text-base p-1 xs:w-1/2 xs:h-auto xs:text-xs">
        <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#FECBF6] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24  sm:h-24 w-full mx-auto my-3 dark:bg-violet-200 bg-[#F86AE1] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs font-bold sm:text-sm">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className xs:text-xs ">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80  p-1 sm:h-auto sm:w-1/2 sm:text-base xs:w-1/2  xs:h-auto xs:text-xs">
        <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#CBFEF8] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24 w-full mx-auto my-3 dark:bg-violet-200 bg-[#6AF8F8] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs font-bold text-base sm:text-sm">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className xs:text-xs ">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80  p-1 sm:h-auto sm:w-1/2 xs:w-1/2 xs:h-auto xs:text-xs sm:text-base">
        <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2 m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#E8CBFE] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24  w-full mx-auto my-3 dark:bg-violet-200 bg-[#A06AF8] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs font-bold text-base sm:text-sm">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className xs:text-xs ">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
        <div className="w-1/4 h-80   p-1 sm:h-auto sm:text-base sm:w-1/2 xs:w-1/2 xs:h-auto xs:text-xs">
        <Link to={"/content"} ><div className="h-auto p-3 w-full sm:p-2  m-2 shadow-md dark:shadow-md dark:bg-zinc-700 bg-[#f5fecb] relative rounded-2xl flex flex-col shadow-slate-500 xs:p-2 ">
            <div className="flex justify-between sm:text-sm">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 xs:h-24 sm:h-24 w-full mx-auto my-3 dark:bg-violet-200 bg-[#d8ef06] rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col xs:text-xs">
                <span className="xs:text-xs font-bold text-base sm:text-sm">What is Design Thinking ?</span>
                <span className="text-[#6F6F6F]">Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg className xs:text-xs">
                <span >69</span>
                <i class="fa-solid fa-thumbs-up text-[#EDA600]"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-white shadow-sm shadow-black text-[#F8AF6A] rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid xs:text-xs sm:text-xs">
                Rs.69(per hour)
              </button>
            </div>
          </div></Link> 
        </div>
       
      </div>
    </div>
  );
};

export default Home;
