import React, { useState } from 'react'
import { useAuth } from '../../providers/auth'
import AddWorkExpe from './AddComp/addWorkExpe'
import Education from './AddComp/addEducation'
import TagsInput from './TagsInput'
import UpdateEducation from './UpdateComp/update.edcation'
import UpdateWorkExpe from './UpdateComp/update.workExpe'
import AddOther from './AddComp/addOther'
import UpdateOther from './UpdateComp/update.other'
import SlotBooking from './SlotBooking'

export default function About() {
  const [tags, setTags] = useState([])

  const [show, setShow] = useState(false)
  const [upEdu, setUpEdu] = useState(false)

  const [WorEx, setWorEx] = useState(false)
  const [upWorEx, setUpWorEx] = useState(false)

  const [other, setOther] = useState(false)
  const [upOther, setUpOther] = useState(false)

  const [index, setIndex] = useState(null)

  const auth = useAuth()
  console.log(tags)

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
            <TagsInput

              setResTags={(tagsarray) => auth.setUser({ ...auth.user, skills: tagsarray })}
              resTags={auth.user.skills}
            />
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


        <SlotBooking />

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
