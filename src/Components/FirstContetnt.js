import React from "react";
import { Link } from "react-router-dom";

const FirstContetnt = () => {
  return (
    <div className="home  h-auto bg-white light dark:text-white dark:bg-neutral-800  p-4 rounded-t-3xl overflow-x-hidden  ">
      <div className="flex w-full  justify-between p-2 xs:items-center xs:font-semibold">
        <div className="flex-col text-lg  ">
          <h1 className="font-bold text-2xl">Results</h1>
          <div className="flex gap-4 text-semibold text-lg  xs:gap-2">
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
        <div className="flex flex-col text-lg xs:gap-2">
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
      <div className="flex  overflow-y-hidden dark:text-slate-100">
        
          <div className="relative w-max flex m-4 justify-center  ">
            <div className="w-44 h-44 rounded-full dark:bg-purple-200 bg-orange-400 xs:w-32 xs:h-32 "></div>
            <div className="absolute text-center p-3 bottom-0 h-12  w-32 dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
              Student
            </div>
          </div>
        
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-pink-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-yellow-200 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-green-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full dark:bg-purple-200  bg-red-400 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-orange-400 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-blue-400 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
        <div className="relative w-max flex m-4 justify-center  ">
          <div className="w-44 h-44 rounded-full  dark:bg-purple-200 bg-orange-600 xs:w-32 xs:h-32 "></div>
          <div className="absolute text-center p-3 bottom-0 h-12  w-32  dark:bg-amber-500 bg-slate-200 rounded-2xl xs:h-9 xs:w-24 xs:rounded-2xl xs:p-1    ">
            Student
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-3 font-semibold sticky overflow-y-auto  ">
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl dark:bg-zinc-700 bg-yellow-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3 dark:bg-violet-200 bg-yellow-100 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900 dark:border-white dark:border-solid">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl dark:bg-zinc-700 bg-orange-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-orange-100 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900 ">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl  dark:bg-zinc-700 bg-green-500 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-green-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl  dark:bg-zinc-700 bg-pink-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-pink-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl  dark:bg-zinc-700 bg-red-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-red-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl dark:bg-zinc-700 bg-blue-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-blue-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl  dark:bg-zinc-700 bg-purple-400 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-purple-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
        <Link to={"/content"}>
          <div className="h-auto p-3 w-80 m-2 shadow-lg dark:shadow-xl  dark:bg-zinc-700 bg-emerald-500 relative rounded-xl flex flex-col shadow-slate-600 ">
            <div className="flex justify-between">
              <span>May 5,2021</span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div className="h-32 w-full mx-auto my-3  dark:bg-violet-200 bg-emerald-200 rounded-2xl"></div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span>What is Design Thinking ?</span>
                <span>Tutor Name</span>
              </div>
              <div className="flex items-center gap-1 p-2 text-lg">
                <span>69</span>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="flex justify-between p-1  item-center ">
              <label>Online</label>
              <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
                Rs.69(per hour)
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FirstContetnt;
