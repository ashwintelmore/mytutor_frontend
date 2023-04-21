import React, { useState, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { Button, Radio, TimePicker, notification } from "antd";
import moment from 'moment'
import { createMeeting, generateMeetingId, getUserallMeets } from "../../App/videoApi";
import { updateRequest } from "../../App/RequestApi";




function Meeting({ show, setShow, data, setData }) {
    const auth = useAuth()
    const [api, contextHolder] = notification.useNotification();

    const showNotification = (e) => {
        api.info({
            message: ` ${e}`,
            description: "test",
            e,
        });
    };
    const [loadings, setLoadings] = useState(false)
    const [reqData, setReqData] = useState({
        reqDates: '',
        reqTime: '',//hour
        reqMassege: '',
        reqAccept: null,//true or false
    })
    const [meeting, setMeeting] = useState({
        tutorId: '',
        name: '',
        code: '',
        participants: []
    })
    const [meets, setMeets] = useState([])
    // all meeting fetch
    useEffect(() => {
        const fetchAllUserMeeting = async () => {
            const res = await getUserallMeets(auth.user._id)
            console.log('res', res)
            if (res.payload) {
                setMeets(res.payload)
                showNotification("All meet fetch")
                // setLoadings(false)
            } else if (res.error) {
                // setLoadings(false)
                showNotification("Something Went Wrong")

            }
        };
        if (!reqData._id)
            fetchAllUserMeeting()
        return () => {

        };
    }, [reqData._id])

    //request updated from data
    useEffect(() => {
        if (data._id) {
            setReqData({
                ...reqData,
                ...data,
            })
            let temp = [...meets]

            temp = temp.filter(e => e._id == data.meeting)
            if (temp.length > 0)
                setMeeting({
                    ...temp[0]
                })
        }
        return () => {

        };
    }, [data, meeting.name])

    // meeting on seelct change input field
    useEffect(() => {
        if (data._id) {
            let temp = [...meets]

            temp = temp.filter(e => e.name == meeting.name)
            if (temp.length > 0)
                setMeeting({
                    ...temp[0]
                })
        }
        return () => {

        };
    }, [meeting.name])


    const generateMeetId = async () => {
        setLoadings(true)
        const res = await generateMeetingId()
        console.log('res', res)
        if (res) {
            setMeeting({
                ...meeting,
                tutorId: auth.user._id,
                code: res
            })
            onCreateMeeting()
            showNotification("Meeting is Created")
            setLoadings(false)
        } else {
            setLoadings(false)
            showNotification("Something Went Wrong")

        }
    };

    const updateRequestDetails = async () => {
        const participant = {
            learnerId: data.requesterId,
            name: data.requesterName,
        }



        const _data = {
            ...data,
            ...reqData,
            meeting: meeting._id
        }

        const payload = {
            id: data._id,
            payload: _data
        }

        console.log('_data', _data)
        const res = await updateRequest(payload)
        console.log('res', res)
        if (res.payload) {
            setMeeting(res.payload)
            showNotification("Request sended back")
            // setLoadings(false)
        } else if (res.error) {
            // setLoadings(false)
            showNotification("Something Went Wrong")

        }
    };

    const onCreateMeeting = async () => {
        const participant = {
            learnerId: data.requesterId,
            name: data.requesterName,
        }
        const _data = {
            ...meeting,
            tutorId: auth.user._id,
            participants: [...meeting.participants, participant]
        }

        const res = await createMeeting(_data)
        console.log('res', res)
        if (res.payload) {
            setMeeting(res.payload)
            showNotification("Meeting is created")
            // setLoadings(false)
        } else if (res.error) {
            // setLoadings(false)
            showNotification("Something Went Wrong")

        }
    };



    if (!show)
        return null;
    return (
        <div className="flex w-full  items-center justify-center xs:flex-col absolute z-20 top-4 left-0">
            {contextHolder}
            <div className=" bg-[#fff] relative w-4/6 h-auto p-3 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12">
                <h2 className="text-[#f48c2b] top-0 left-2 text-lg p-2 absolute  ">Meeting</h2>

                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">

                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Would You like to</label>
                        <div className="mt-2">
                            <Radio.Group
                                buttonStyle="solid"
                                optionType="button"
                                defaultValue={reqData.reqAccept}
                                value={reqData.reqAccept}
                                onChange={(e) => setReqData({ ...reqData, reqAccept: e.target.value })}
                            >
                                <Radio.Button
                                    value={true}
                                    style={{
                                        // margin: 10
                                    }}
                                >
                                    Accept
                                </Radio.Button>
                                <Radio.Button
                                    value={false}
                                    style={{
                                        // margin: 10
                                    }}
                                >
                                    Reject
                                </Radio.Button>

                            </Radio.Group>
                        </div>
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Select Meeting date</label>
                        <Radio.Group
                            buttonStyle="solid"
                            optionType="button"
                        // value={reqData.reqDates[0]}
                        // onChange={(e) => setReqData({ ...reqData, reqDates: [e.target.value] })}
                        >
                            {
                                data.reqDates.map((_item, i) =>
                                    <Radio.Button
                                        value={_item}
                                        key={i}
                                        style={{
                                            // margin: 10
                                        }}
                                    >
                                        {_item}
                                    </Radio.Button>
                                )
                            }
                        </Radio.Group>
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>

                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">

                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Choose meeting :</label>
                        <select
                            placeholder="select option"
                            name="meeting"
                            className="rounded-xl w-full shadow-sm shadow-black p-2"
                            value={meeting.name}
                            onChange={(e) => setMeeting({ ...meeting, name: e.target.value })}
                        >
                            <option value={''}>Creating new Meeting</option>
                            {
                                meets.map((item, i) => (
                                    <option
                                        value={item.name}
                                        key={i}
                                    >{item.name}</option>
                                ))
                            }
                        </select>
                        <label className="text-xs ml-2 p-1">Select what is type of your post</label>
                    </div>

                    <div className=" gap-2 relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base" htmlFor="slots">Set time :</label>

                        <div className="flex gap-2 relative  w-full p-2 ">
                            <label htmlFor="from">Meeting Start at</label>
                            <TimePicker
                                id="from"
                                className="h-fit"
                                showTime={{ format: 'hh:mm A', use12Hours: true }}
                                showSecond={false}

                                value={reqData.reqTime == '' ? '' : moment(reqData.reqTime, 'hh:mm A')}

                                onSelect={(value) => setReqData({ ...reqData, reqTime: value.format('hh:mm A') })}
                            />
                        </div>
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>

                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Name of Meeting</label>
                        <div className="flex items-center  relative border border-gray-500 shadow-slate-400 shadow-md text-sm   rounded-xl p-1  ">
                            <input
                                type="text"
                                placeholder="Write something"
                                className="rounded-lg px-2 py-1  w-full  outline-none "
                                value={meeting.name}
                                onChange={(e) => setMeeting({ ...meeting, name: e.target.value })}
                            ></input>

                            <Button
                                className="absolute rounded-xl text-sm  h-7 w-fit  text-white right-1   bg-blue-500"
                                type="primary"
                                // loading={loadings}
                                onClick={() => generateMeetId()}
                            >
                                Create
                            </Button>


                        </div>

                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Meeting Code</label>
                        <input
                            className="rounded-xl w-full shadow-sm shadow-black p-2"
                            type="text"
                            name="code"
                            value={meeting.code}
                            disabled
                        />
                        <label className="text-xs ml-2 p-1">Copy meeeting link</label>
                    </div>
                </div>
                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Go to meeting</label>
                        <label className="text-xs ml-2 p-1">Write something</label>
                    </div>
                </div>



                <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end">
                    <button className="xs:w-2/5 bg-[#f63030] text-white rounded-xl p-2 w-[15%]"

                    >Delete
                    </button>
                    <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                        onClick={() => updateRequestDetails()}
                    >Send
                    </button>
                    <button className=" xs:w-2/5 bg-[#30f65e] text-white rounded-xl p-2 w-[15%]"
                        onClick={() => setShow(!show)}
                    >Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Meeting;
