import React from "react";

const Post = () => {
  return (
    <div className="Post  h-auto rounded-t-3xl flex dark:text-white dark:bg-zinc-800 bg-slate-100 xs:w-full">
      <div className="flex flex-col w-3/5 xs:w-full">
        <div className=" h-auto p-2 xs:p-1 ">
          <div className="flex justify-between  p-2 m-4 items-center">
            <h4 className="xs:text-lg"> May 5, 2023</h4>
            <i class="fa-sharp fa-solid fa-ellipsis-vertical xs:text-lg"></i>
          </div>
          <div className="bg-red-300 dark:bg-slate-600 h-80 p-2 rounded-xl  m-4 xs:h-40 xs:p-1 xs:m-2"></div>
          <div className="flex justify-between p-2 items-center text-xl xs:text-sm ">
            <h1 className="xs:text-xs font-semibold">
              What is Design thinking ?
            </h1>
            <div className="flex   items-center gap-5 p-2 xs:gap-0 xs:text-xs xs:p-1 ">
              <div className="flex  gap-1 items-center xs:gap-1 xs:text-xs">

                <i class="fa-solid fa-indian-rupee-sign"></i>
                <label>59(per hour)</label>
              </div>
              <div className="flex gap-1  items-center xs:gap-1 xs:text-xs">

                <h4>4</h4>
                <label>sits left</label>
              </div>
              <div className="flex  gap-1 items-center xs:gap-1 xs:text-xs">

                <h4>60</h4>
                <i class="fa-solid fa-thumbs-up"></i>
              </div>
              <div className="flex gap-1  items-center xs:gap-1 xs:text-xs">

                <h4>60</h4>
                <i class="fa-solid fa-thumbs-down"></i>
              </div>
            </div>
          </div>
          <p className="xs:text-xs">
            Discription Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi eget ex in tortor tincidunt consectetur. Etiam at viverra
            justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Fusce rutrum condimentum dictum.
            Nullam lobortis lectus ut pretium accumsan. Proin eu elementum erat,
            eget dapibus dolor. Aliquam erat volutpat.
          </p>
        </div>
        <div className="flex justify-between  p-3 xs:p-1">
          <div className="flex items-center gap-2 xs:gap-1 ">
            <div className="bg-red-300 rounded-full h-14 w-14 xs:h-10 xs:w-10 "></div>
            <div className="flex flex-col xs:text-xs">
              <label>Tutor Name</label>
              <label>1.2k Favourite</label>
            </div>
          </div>
          <button className="bg-blue-400 w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-10 ">
            Favourite
          </button>
        </div>
        <div className="flex items-center p-2 gap-3 xs:text-sm ">
          <div className="flex p-1 gap-1 ">
            <h3>286</h3>
            <label>Comments</label>
          </div>
          <div className="flex gap-1 items-center">

            <i class="fa-solid fa-bars-staggered"></i> <label>Sort by</label>
          </div>
        </div>
      </div>
      <div className=" flex  flex-col w-2/5 p-2 xs:hidden">
        <h4 className="text-lg">Select available dates</h4>
        <div className="flex flex-wrap dark:bg-orange-300 dark:text-black bg-green-200 p-4 gap-2 text-lg font-semibold rounded-2xl ">
          <span className="h-16 w-16 p-4 bg-slate-400 dark:border-black rounded-full">
            Mon
          </span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Tue</span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Wed</span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Thur</span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Fri</span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Sat</span>
          <span className="h-16 w-16 p-4 bg-slate-400 rounded-full">Sun</span>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">1</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">2</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">3</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">4</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">5</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">6</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">7</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">8</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">9</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">10</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">11</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">12</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">13</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">14</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">15</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">16</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">17</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">18</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">19</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">20</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">21</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">22</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">23</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">24</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">24</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">26</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">27</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">28</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">29</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">30</button>
          <button className="h-16 w-16 p-4 bg-slate-50 rounded-full">31</button>
        </div>
        <div className="flex flex-col p-3">
          <h3>Select Available Time Slot</h3>
          <div className="w-full h-auto p-2 flex flex-wrap gap-2 justify-evenly dark:text-black ">
            <button className="w-2/5 rounded-2xl bg-orange-300 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 rounded-2xl bg-orange-300  dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 rounded-2xl bg-orange-300 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
            <button className="w-2/5 rounded-2xl bg-orange-300 dark:bg-zinc-50 h-9">
              10:00AM-11:00AM
            </button>
          </div>
        </div>
        <div className="p-3 w-4/5 flex flex-col gap-1">
          <h3>Message</h3>
          <input
            className="w-full p-2 rounded-2xl"
            placeholder="Write something..."
            type={Text}
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="w-48 h-10 bg-slate-300 dark:text-black  rounded-lg p-1">
            Book Slot
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
