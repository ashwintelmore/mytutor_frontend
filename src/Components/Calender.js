import React from "react";

const Calender = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "calender calopen" : "calender"}>
      <div className="flex justify-between items-center p-1">
        <i
          className="fa-solid fa-xmark cursor-pointer  text-2xl rounded-full"
          onClick={toggle}></i>
        <h2 className="text-2xl ">My Tutor</h2>
      </div>
      <div className=" flex  flex-col w-full p-1 ">
 <h4 className="text-md font-semibold" >Select available dates</h4>
      <div className="child flex flex-wrap  bg-lime-300 p-1  text-xs  rounded-2xl ">
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Mon</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Tue</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Wed</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Thur</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Fri</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Sat</span>
          <span className="h-8 w-8 p-1 bg-slate-400 rounded-full">Sun</span>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">1</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">2</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">3</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">4</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">5</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">6</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">7</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">8</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">9</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">10</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">11</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">12</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">13</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">14</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">15</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">8</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">17</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">18</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">19</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">20</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">21</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">22</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">23</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">24</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">24</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">26</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">27</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">28</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">29</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">30</button>
          <button className="h-8 w-8 p-1 bg-slate-50 rounded-full">31</button>
           
      </div>
     <div className="flex flex-col p-1">
       <h3 className="text-lg font-semibold">Select Available Time Slot</h3>
        <div className="w-full h-auto p-1 gap-1 flex flex-wrap ">
            <button className="w-28 text-xs rounded-xl bg-gray-300 h-7">10:00AM-11:00AM</button> 
            <button  className="w-28 text-xs rounded-xl  bg-gray-300 h-7" >10:00AM-11:00AM</button> 
            <button  className="w-28 text-xs rounded-xl  bg-gray-300 h-7" >10:00AM-11:00AM</button> 
            <button  className="w-28 text-xs rounded-xl  bg-gray-300 h-7" >10:00AM-11:00AM</button> 
        </div>
     </div>
     <div className="p-1  flex flex-col gap-1">
        <h3 className="font-semibold">Message
        </h3>
        <input className="w-full p-1 rounded-xl" placeholder="Write something..." type={Text}></input>
     </div>
     <div className="flex justify-center">
     <button className="w-32 h-9 bg-slate-300 rounded-lg p-1">Book Slot</button></div>
 </div>








      
    </div>
  );
};

export default Calender;
