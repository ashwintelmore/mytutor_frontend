import React from 'react'

function SlotBooking() {
    return (
        <>
            <div className="w-1/2  xs:flex-col xs:w-full ">
                <div className="p-2 gap-2 flex flex-col">
                    <h2 className="text-lg text-[#FF0000]">Set Slot</h2>
                    <div className="flex">
                        <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Available :</label>
                        <select placeholder="select option" name="slots" className="rounded-xl w-full shadow-sm shadow-black p-2" >
                            <option>Everyday</option>
                            <option>Wekend</option>
                            <option>Week days</option>
                            <option>Not Available</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap dark:bg-orange-300 dark:text-black bg-gray-200 p-2 gap-2 text-lg font-semibold mt-20 rounded-2xl xs:gap-1 xs:p-2 xs:ml-2 xs:font-normal ">
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
                <div className=" flex flex-col gap-5 p-2 ">
                    <h2 className="font-semibold">Select Time Range</h2>
                    <div className="every">
                        <input
                            type="checkbox"
                            id='everytime'
                            className='w-4 h-4 mr-2'
                        />
                        <label htmlFor="everytime">Every Time</label>
                    </div>
                    <div className="flex gap-4">
                        {" "}
                        From{" "}
                        <button className="w-24 text-xs rounded-xl border shadow-md shadow-slate-400 h-7">
                            02:00Am
                        </button>{" "}
                        to{" "}
                        <button className="w-24 text-xs rounded-xl border shadow-md shadow-slate-400 h-7">
                            02:00Pm
                        </button>{" "}
                        <button className="rounded-xl  w-20 h-7 bg-orange-300">add</button>{" "}
                    </div>
                    <div className="w-full h-auto p-1 gap-4 flex flex-wrap xs:w-full" >
                        <button className="w-2/5 text-sm border shadow-lg shadow-gray-400 rounded-xl   p-2">
                            10:00AM-11:00AM
                        </button>
                        <button className="w-2/5 text-sm border shadow-lg shadow-gray-400 rounded-xl     p-2">
                            10:00AM-11:00AM
                        </button>
                        <button className="w-2/5 text-sm border shadow-lg shadow-gray-400 rounded-xl    p-2">
                            10:00AM-11:00AM
                        </button>
                        <button className="w-2/5 text-sm border shadow-lg shadow-gray-400 rounded-xl    p-2">
                            10:00AM-11:00AM
                        </button>
                    </div>
                </div>
                <div className="p-2 flex  flex-col gap-2">
                    <h2 className="text-red-600">Recomendation</h2>
                    <div className="flex items-center p-1 gap-3">
                        <img
                            className="rounded-full h-16 w-16  border-4 border-red-500"
                            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-violet-800">User Name</h3>
                            <p>Something bio details</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full h-16 w-16 border-4 border-red-500"
                            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-violet-800">User Name</h3>
                            <p>Something bio details</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full h-16 w-16 border-4 border-red-500"
                            src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                            alt=""
                        />
                        <div>
                            <h3 className="text-violet-800">User Name</h3>
                            <p>Something bio details</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SlotBooking