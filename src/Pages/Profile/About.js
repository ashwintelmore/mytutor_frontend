import React, { useState } from 'react'
import { useAuth } from '../../providers/auth'
import AddWorkExpe from './AddComp/addWorkExpe'
import Education from './AddComp/addEducation'
import TagsInput from './TagsInput'
import UpdateEducation from './UpdateComp/update.edcation'
import UpdateWorkExpe from './UpdateComp/update.workExpe'
import AddOther from './AddComp/addOther'
import UpdateOther from './UpdateComp/update.other'

export default function About() {
  const [show, setShow] = useState(false)
  const [upEdu, setUpEdu] = useState(false)

  const [WorEx, setWorEx] = useState(false)
  const [upWorEx, setUpWorEx] = useState(false)

  const [other, setOther] = useState(false)
  const [upOther, setUpOther] = useState(false)

  const [index, setIndex] = useState(null)

  const auth = useAuth()


  const onUpdate = (item, i) => {
    if (item == 'edu')
      setUpEdu(!upEdu)
    else if (item == 'work')
      setUpWorEx(!upWorEx)
    else if (item == 'other')
      setUpOther(!upOther)

    setIndex(i)
  };


  return (
    <>

      <div className="flex xs:flex-col xs:w-full xs:overflow-y-auto  ">
        {/* left */}
        <div className="w-1/2  p-2 flex flex-col gap-3  xs:w-full h-auto ">

          <div className="p-2 flex flex-col gap-1">
            <h2 className="font-semibold text-lg text-[#1A0970]">Skills</h2>
            <TagsInput />
          </div>

          {/* education section */}
          <div className="flex flex-col p-2 gap-6 ">
            <div className="flex  justify-between">
              <label className="font-semibold text-lg text-[#FF0000] ">Education</label>
              <div>
                {/* <button className="rounded-2xl bg-orange-400 text-xs w-14 text-white p-2 font-semibold">
                  Edit
                </button> */}
                <button className="rounded-2xl bg-orange-400 text-xs w-14 text-white p-2 font-semibold"
                  onClick={() => setShow(!show)}
                >
                  Add
                </button>
              </div>
            </div>
            {
              auth.user._id ?
                auth.user.education.map((item, i) => {
                  return <div className="flex flex-col p-2 gap-3" key={i}>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col ">
                        <div className=" flex justify-between">
                          <h3 className="font-semibold text-lg text-[#1A0970]">{item.title}</h3>
                          <i className="fa-solid fa-pencil bg-slate-50 rounded-full shadow-sm shadow-slate-500 p-1"
                            onClick={() => onUpdate("edu", i)}
                          >
                          </i>
                        </div>
                        <div className="flex justify-between ">
                          <label className="text-[#6B6976]">{item.location} | {item.orginization}</label>{" "}
                          <label className="font-semibold">{item.from}-{item.to}</label>
                        </div>
                      </div>
                      <p className="text-[#0D0E2F]">
                        {item.descrp}
                      </p>
                    </div>
                  </div>
                })
                :
                null
            }
          </div>

          {/* Work experience section */}
          <div className="flex flex-col p-2 gap-6 ">
            <div className="flex  justify-between">
              <label className="font-semibold text-lg text-[#FF0000] "> Work Experience </label>
              <div>
                <button className="rounded-2xl bg-orange-400 text-xs w-14 text-white p-2 font-semibold"
                  onClick={() => setWorEx(!WorEx)}
                >
                  Add
                </button>
              </div>
            </div>
            {
              auth.user._id ?
                auth.user.workExperience.map((item, i) => {
                  return <div className="flex flex-col p-2 gap-3" key={i}>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col ">
                        <div className=" flex justify-between">
                          <h3 className="font-semibold text-lg text-[#1A0970]">{item.title}</h3>
                          <i className="fa-solid fa-pencil bg-slate-50 rounded-full shadow-sm shadow-slate-500 p-1"
                            onClick={() => onUpdate("work", i)}
                          >
                          </i>
                        </div>
                        <div className="flex justify-between ">
                          <label className="text-[#6B6976]">{item.location} | {item.orginization}</label>{" "}
                          <label className="font-semibold">{item.from}-{item.to}</label>
                        </div>
                      </div>
                      <p className="text-[#0D0E2F]">
                        {item.descrp}
                      </p>
                    </div>
                  </div>
                })
                :
                null
            }
          </div>
          {/* Other section */}
          <div className="flex flex-col p-2 gap-6 ">
            <div className="flex  justify-between">
              <label className="font-semibold text-lg text-[#FF0000] "> Achivement/Project/Other </label>
              <div>
                <button className="rounded-2xl bg-orange-400 text-xs w-14 text-white p-2 font-semibold"
                  onClick={() => setOther(!other)}
                >
                  Add
                </button>
              </div>
            </div>
            {
              auth.user._id ?
                auth.user.achievements.map((item, i) => {
                  return <div className="flex flex-col p-2 gap-3" key={i}>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col ">
                        <div className=" flex justify-between">
                          <h3 className="font-semibold text-lg text-[#1A0970]">{item.title}</h3>
                          <i className="fa-solid fa-pencil bg-slate-50 rounded-full shadow-sm shadow-slate-500 p-1"
                            onClick={() => onUpdate("other", i)}
                          >
                          </i>
                        </div>
                        <div className="flex justify-between ">
                          <label className="text-[#6B6976]">{item.location} | {item.orginization}</label>{" "}
                          <label className="font-semibold">{item.from}-{item.to}</label>
                        </div>
                      </div>
                      <p className="text-[#0D0E2F]">
                        {item.descrp}
                      </p>
                    </div>
                  </div>
                })
                :
                null
            }
          </div>
        </div>
        {/* right */}
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
            <h2 className="font-semibold ">Select Time Range</h2>
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
      </div>

      <Education
        show={show}
        setShow={() => setShow(!show)}
      />
      <UpdateEducation
        show={upEdu}
        setShow={() => setUpEdu(!upEdu)}
        data={index}
        setData={(e) => setIndex(e)}
      />

      <AddWorkExpe
        show={WorEx}
        setShow={() => setWorEx(!setWorEx)}
      />
      <UpdateWorkExpe
        show={upWorEx}
        setShow={() => setUpWorEx(!upWorEx)}
        data={index}
        setData={(e) => setIndex(e)}
      />

      <AddOther
        show={other}
        setShow={() => setOther(!other)}
      />
      <UpdateOther
        show={upOther}
        setShow={() => setUpOther(!upOther)}
        data={index}
        setData={(e) => setIndex(e)}
      />

    </>
  )
}
