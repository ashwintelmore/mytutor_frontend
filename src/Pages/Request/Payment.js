import React, { useState, useEffect, cloneElement } from "react";
import { Buffer } from 'buffer';
import { useAuth } from "../../providers/auth";
import { Button, Radio, Steps, TimePicker, notification } from "antd";
import moment from 'moment'
import { createMeeting, generateMeetingId, getUserallMeets } from "../../App/videoApi";
import { updateRequest } from "../../App/RequestApi";
import { useAlert } from "../../Components/Alert";
import { updateUser } from "../../App/Api";
import { getPost } from "../../App/postAPI";
import { createPayment, getPayment, updatePayment } from "../../App/paymentApi";
import { postImgCollection } from "../../assets/postImages/postImg";




function Payment({ showPayment, setShowPayment, reqData, setReqData, readOnly = false }) {

    const auth = useAuth()
    const [showNotification, contextHolder] = useAlert();
    const [isUipCorrect, setIsUipCorrect] = useState(true)
    const [loadings, setLoadings] = useState({
        user: false,
        post: false,
    })
    const [payment, setPayment] = useState({
        remark: '',
        upiId: '',
        charges: '',
        image: {
            data: [],
            contentType: ''
        }
        // postId: '',
        // tutorId: '',
        // learnerId: '',
        // requestId: '',
    })
    const [qrCode, setQrCode] = useState()
    const [prevQrCode, setPrevQrCode] = useState()
    const bufferToImage = (bufferData) => {
        return `data:${bufferData.image.contentType};base64, ${Buffer.from(bufferData.image.data.data).toString('base64')}`
    };
    useEffect(() => {
        if (!qrCode) {
            setPrevQrCode(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(qrCode)
        setPrevQrCode(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [qrCode])
    const [payStatus, setPayStatus] = useState(-1)
    const [isDoneStateChanges, setIsDoneStateChanges] = useState(false)
    //get post for charges price
    useEffect(() => {

        if (payment.charges == '' && reqData._id) {
            setPayment({
                ...payment,
                charges: reqData.postId.charges,
            })
        }
        // fetchgetPost()
    }, [reqData])

    console.log('reqData', reqData)
    console.log('payment', payment)
    //get payment details
    useEffect(() => {
        const fetchPayment = async () => {
            console.log("fethc payment")
            // setLoadings({ ...loadings, post: true })
            const res = await getPayment(reqData.paymentId);
            console.log(res)
            if (res.error) {
                // setLoadings({ ...loadings, post: false })
            } else if (res.payload) {
                setPayment({
                    ...res.payload,
                })
                setPayStatus(paymentStatusUpdate(res.payload))
                // setLoadings({ ...loadings, post: false })
            }

        };
        if (reqData.paymentId) {
            //     fetchPayment()
            setPayment({
                ...reqData.paymentId
            })

            setPayStatus(paymentStatusUpdate(reqData.paymentId))
        }
    }, [reqData])

    //update payment ids from reqData
    useEffect(() => {
        // if (reqData._id) {
        //     setPayment({
        //         ...payment,
        //         tutorId: reqData.requestedId,
        //         tutorName: reqData.requestedName,
        //         postId: reqData.postId,
        //         postName: reqData.postName,
        //         learnerId: reqData.requesterId,
        //         learnerName: reqData.requesterName,
        //         requestId: reqData._id,
        //     })
        // }
    }, [reqData])


    useEffect(() => {
        if (payment._id) {
            setPayStatus(paymentStatusUpdate(payment))
        }
    }, [payment])


    useEffect(() => {
        if (isDoneStateChanges) {
            updatePaymentDetails(payment)
            setIsDoneStateChanges(false)
        }

    }, [isDoneStateChanges])


    const onUpdateUser = async () => {
        setLoadings({ ...loadings, user: true })
        const res = await updateUser(auth.user);
        if (res.error) {
            setLoadings({ ...loadings, user: false })
            showNotification(res.error.errMessage)
        } else if (res.payload) {
            setLoadings({ ...loadings, user: false })
            setIsUipCorrect(true)
            showNotification("Profile Updated successfully")
        }
    };

    const onCreatePayment = async () => {
        //upreqDatate payment , request

        const paymentData = {
            ...payment,
            upiId: auth.user.payment.upiId,
            postId: reqData.postId._id,
            tutorId: reqData.requestedId._id,
            learnerId: reqData.requesterId._id,
            requestId: reqData._id,
        }

        if (payment._id) {
            updatePaymentDetails(paymentData)
            return
        }

        console.log('paymentData', paymentData)
        let formData = new FormData()
        formData.append('payload', JSON.stringify(paymentData))
        formData.append('qrCode', qrCode)

        const resp = await createPayment(formData)
        console.log('resp', resp)
        if (resp.payload) {
            setPayment(resp.payload)
            showNotification("Payment Request Initiated")

            const _reqData = {
                ...reqData,
                paymentId: resp.payload._id,

            }

            const res = await updateRequest(_reqData)
            console.log('res', res)
            if (res.payload) {
                // showNotification("Request updated Successfull")
            } else if (res.error) {
                showNotification(res.error.errMessage)
            }

        } else if (resp.error) {
            showNotification(resp.error.errMessage)
        }
    };

    const updatePaymentDetails = async (data) => {
        // return

        let formData = new FormData()
        formData.append('payload', JSON.stringify(data))
        formData.append('qrCode', qrCode)


        const resp = await updatePayment(payment._id, formData)
        console.log('resp', resp)
        if (resp.payload) {
            setPayment(resp.payload)
            showNotification("Payment Request updated")
        } else if (resp.error) {
            showNotification(resp.error.errMessage)
        }
    };


    const paymentStatusUpdate = (_payment) => {

        if (_payment.paymentStatus?.isCompletd) {
            // setPayStatus(5)
            return 5;
        } else if (_payment.paymentStatus?.isReceivedByTutor) {
            // setPayStatus(3)
            return 3;
        } else if (_payment.paymentStatus?.isDoneByLearner) {
            // setPayStatus(2)
            return 2;
        } else if (_payment._id) {
            // setPayStatus(1)
            return 1;
        } else {
            // setPayStatus(-1)
            return -1;
        }
    };

    const onPaymentStatusChange = (value) => {
        setPayment((prev, tet) => ({
            ...prev,
            paymentStatus: {
                ...prev.paymentStatus,
                isDoneByLearner: value
            }
        }))

        setIsDoneStateChanges(true)
    }

    const renderPaymentStatusBtn = (payment) => {
        if (!payment._id || payment.paymentStatus.isCompletd || !payment.paymentStatus.isDoneByLearner) {
            return null
        } else if (payment._id && payment.paymentStatus.isDoneByLearner && payment.paymentStatus.isReceivedByTutor) {

            return (
                <button className="xs:w-2/5 bg-[#9a9a9a] text-white rounded-xl p-2 w-[15%]"
                    onClick={() =>
                        setPayment({
                            ...payment,
                            paymentStatus: {
                                ...payment.paymentStatus,
                                isReceivedByTutor: false,
                                isCompletd: false
                            }
                        })
                    }
                >Not Recieved
                </button>
            )
        } else if (payment._id && payment.paymentStatus.isDoneByLearner) {
            return (
                <button className="xs:w-2/5 bg-[#30f65e] text-white rounded-xl p-2 w-[15%]"
                    onClick={() => {
                        if (window.confirm("Alert!! Once you clicked on ok you will not allow to undo that status")) {
                            setPayment({
                                ...payment,
                                paymentStatus: {
                                    ...payment.paymentStatus,
                                    isReceivedByTutor: true,
                                    isCompletd: true,
                                }
                            })
                            setIsDoneStateChanges(!isDoneStateChanges)
                        }
                    }}
                >Recieved
                </button>
            )
        }
    };
    const onCancelHandle = (e) => {
        setShowPayment(!showPayment)
    };

    const renderInitialUpdateBtn = (payment) => {
        if (!payment._id) {
            return (
                <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"
                    onClick={() => onCreatePayment()}
                > Initiate
                </button>
            )
        } else if (payment._id && (payment.paymentStatus.isCompletd || payment.paymentStatus.isDoneByLearner)) {
            return null
        } else if (payment._id) {
            return (
                <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                    onClick={() => onCreatePayment()}
                > Update
                </button>
            )
        }
    };


    if (!showPayment)
        return null;
    return (
        <div className="flex w-full  items-center justify-center xs:flex-col absolute z-20 top-4 left-0">
            {contextHolder}
            <div className=" bg-[#fff] relative w-4/6 h-auto p-3 rounded-3xl flex flex-col  items-center justify-center  shadow-md shadow-slate-600 xs:flex-col xs:w-11/12">
                <h2 className="text-[#f48c2b] top-0 left-2 text-lg p-2 absolute  ">Payment Details</h2>
                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base"> {readOnly ? "Reciever's UPI id" : 'Your UPI id'}</label>
                        <div className="flex items-center  relative border border-gray-500 shadow-slate-400 shadow-md text-sm   rounded-xl p-1  ">
                            <input
                                type="text"
                                placeholder="Write something"
                                className="rounded-lg px-2 py-1  w-full  outline-none "
                                value={readOnly ? payment.upiId : auth.user.payment.upiId}
                                onChange={(e) => { auth.setUser({ ...auth.user, payment: { ...auth.user.payment, upiId: e.target.value } }); setPayment({ ...payment, upiId: e.target.value }) }}
                                disabled={readOnly ? true : isUipCorrect}
                            ></input>
                            {
                                !isUipCorrect
                                &&
                                <Button
                                    className="absolute rounded-xl text-sm  h-7 w-fit  text-white right-1   bg-blue-500"
                                    type="primary"
                                    loading={loadings}
                                    onClick={() => onUpdateUser()}
                                >
                                    Update
                                </Button>
                            }
                        </div>

                        <label className="text-xs ml-2 p-1">e.g. 9824xxxxx@ybl, 9824xxxxx@okayhdfs, etc </label>
                    </div>
                    {
                        !readOnly &&
                        <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                            <label className="w-full p-2 text-base xs:text-base">Is UIP id Correct</label>
                            <div className="mt-2">
                                <Radio.Group
                                    buttonStyle="solid"
                                    optionType="button"
                                    defaultValue={isUipCorrect}
                                    value={isUipCorrect}
                                    onChange={(e) => setIsUipCorrect(e.target.value)}
                                >
                                    <Radio.Button
                                        value={true}
                                        style={{
                                            // margin: 10
                                        }}
                                    >
                                        Yes
                                    </Radio.Button>
                                    <Radio.Button
                                        value={false}
                                        style={{
                                            // margin: 10
                                        }}
                                    >
                                        No
                                    </Radio.Button>

                                </Radio.Group>
                            </div>

                            <label className="text-xs ml-2 p-1">Write something</label>
                        </div>
                    }
                </div>
                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Final Charges</label>
                        <input
                            className="rounded-xl w-full shadow-sm shadow-black p-2"
                            type="number"
                            name="charges"
                            disabled={readOnly ? true : false}
                            value={payment.charges}
                            onChange={(e) => setPayment({ ...payment, charges: e.target.value })}
                        />
                        <label className="text-xs ml-2 p-1">some notes</label>
                    </div>
                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Remark</label>
                        <input
                            className="rounded-xl w-full shadow-sm shadow-black p-2"
                            type="text"
                            name="code"
                            disabled={readOnly ? true : false}
                            value={payment.remark}
                            onChange={(e) => setPayment({ ...payment, remark: e.target.value })}
                        />
                        <label className="text-xs ml-2 p-1">some notes</label>
                    </div>
                </div>
                <div className="flex p-1   w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    {
                        !readOnly &&
                        <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                            <label className="w-full p-2 text-base xs:text-base">Upload QR Code</label>
                            <input
                                className="rounded-xl w-full shadow-sm shadow-black p-2"
                                type="file"
                                name="qrCode"
                                disabled={readOnly ? true : false}
                                // value={payment.qrCode}
                                onChange={(e) => setQrCode(e.target.files[0])}
                            />
                            <label className="text-xs ml-2 p-1">Upload image</label>
                        </div>
                    }

                    <div className="flex flex-col relative  w-[45%] p-2  xs:w-full">
                        <label className="w-full p-2 text-base xs:text-base">Your QR code</label>
                        {
                            prevQrCode ?
                                <img src={prevQrCode} alt="" />
                                :
                                <img src={payment._id && bufferToImage(payment)} alt="" />
                        }
                    </div>
                </div>
                <div className=" p-1 my-2 w-full justify-between text-sm xs:text-xs xs:gap-0 xs:p-1 xs:flex-col xs:w-full">
                    <div className="flex flex-col  w-full   p-2 justify-around  ">
                        <label className="w-full p-2 py-4 text-base xs:text-base">Payment Status</label>
                        <Steps
                            size="small"
                            current={payStatus}
                            items={[
                                {
                                    title: 'Tutor Initiated',
                                },
                                {
                                    title: 'Waiting Learner',
                                },
                                {
                                    title: 'Recieved by Tutor',
                                },
                                {
                                    title: 'Payment Completed',
                                },
                            ]}
                        />
                        {/* <label className="text-xs ml-2 p-1"></label> */}
                    </div>

                </div>

                {
                    readOnly ? //learner
                        <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end">

                            {

                                (payment._id && !payment.paymentStatus.isCompletd)
                                &&
                                <>
                                    {

                                        payment._id && payment.paymentStatus.isDoneByLearner ?
                                            <button className="xs:w-2/5 bg-[#9a9a9a] text-white rounded-xl p-2 w-[15%]"
                                                onClick={() => onPaymentStatusChange(false)}
                                            >Not Done
                                            </button>
                                            :
                                            <button className="xs:w-2/5 bg-[#30f65e] text-white rounded-xl p-2 w-[15%]"
                                                onClick={() => onPaymentStatusChange(true)}
                                            >Done
                                            </button>
                                    }
                                </>
                            }

                            {
                                (payment._id && !payment.paymentStatus.isDoneByLearner)
                                &&
                                <button className="xs:w-2/5 bg-[#f68f30] text-white rounded-xl p-2 w-[15%]"

                                    onClick={() => window.alert("Make payment on that uip and after payment done please update status as done for confiremation")}
                                > Go to Payment
                                </button>
                            }
                            <button className=" xs:w-2/5 bg-[#f63730] text-white rounded-xl p-2 w-[15%]"
                                onClick={() => onCancelHandle()}
                            >Cancel
                            </button>
                        </div>
                        ://teacher

                        <div className="flex p-2 xs:w-full xs:justify-evenly gap-2 w-full justify-end">

                            {payment._id && renderPaymentStatusBtn(payment)}

                            {renderInitialUpdateBtn(payment)}
                            <button className=" xs:w-2/5 bg-[#f63730] text-white rounded-xl p-2 w-[15%]"
                                onClick={() => onCancelHandle()}
                            >Cancel
                            </button>
                        </div>
                }
            </div>
        </div >
    );
};

export default Payment;
