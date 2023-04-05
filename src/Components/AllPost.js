import React from "react";

function AllPost() {
  return (
    <div className="flex h-screen w-full rounded-3xl bg-white">
      <div className="w-1/3 flex flex-col h-auto items-center p-2 gap-4 ">
        <h3 className="text-lg font-semibold">Profile Photo</h3>
        <div className="h-32 w-32 rounded-full bg-lime-300  relative ">
          <img
            className="rounded-full h-32 w-32 p-1"
            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
            alt=""
          />
          <i class="fa-solid fa-user-pen absolute bottom-4 h-8 w-8 bg-slate-50 rounded-full p-2 right-0 "></i>
        </div>
        <div className="flex-col flex items-center text-lg gap-1 ">
          <label>UserName</label>
          <label>Teacher</label>
        </div>

        <div className="flex gap-12 text-lg">
          <div className="flex-col flex items-center ">
            <label>17</label>
            <label>Lectures</label>
          </div>
          <div className="flex-col flex items-center ">
            <label>1.2k</label>
            <label>Hours</label>
          </div>
          <div className="flex-col flex items-center ">
            <label>10</label>
            <label>Learners </label>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-lg p-2">
          <labe>Bio</labe>
          <p>
            I am passionate about developing web apps | Clean maintainable and
            scalable code | FrontEnd Performance Matters a LotCurrently getting
            hands on Mobile native and React native development I write here
            https://dev.to/ashwintelmore
          </p>
        </div>
        <div className=" text-lg w-11/12 gap-3 flex flex-col ">
          <h3>Something Heading</h3>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Write something"
              className="rounded-lg p-1"></input>
            <label className="text-sm">Something content</label>
          </div>
        </div>
      </div>
      <div className=" w-9/12 p-2 flex flex-col gap-2 overflow-scroll">
        <div className="flex gap-3 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5    dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-300 w-4/6 p-2 ">
          <div className="h-32 w-2/5   dark:bg-violet-200 bg-pink-200 rounded-xl"></div>

          <div className="flex flex-col">
            <span>May 5,2021</span>
            <span>What is Design Thinking ?</span>
            <span>Tutor Name</span>

            <label>Online</label>
            <button className="bg-pink-200 rounded-xl p-1 dark:bg-zinc-900">
              Rs.69(per hour)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
