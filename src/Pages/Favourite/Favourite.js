import React, { useEffect, useState } from 'react'
import { createFavourite, getFavourites, updateFavourite } from '../../App/favoriteApi';
import { useAuth } from '../../providers/auth';
import { Link } from 'react-router-dom';


function Favourite() {
    const auth = useAuth()
    const [favourite, setFavourite] = useState([])
    const [isFavourite, setisFavourite] = useState(false)
    //get fovourit
    useEffect(() => {
        const fetchFav = async (id) => {
            const res = await getFavourites(auth.user._id, '')
            if (res.error) {

            } else if (res.payload) {
                if (res.payload.length <= 0)
                    return
                setFavourite(res.payload)
                setisFavourite(res.payload[0].isFavourite)
            }
        };
        if (!favourite._id && auth.user) {//minus one favourite
            fetchFav()
        }
    }, [auth.user])



    const onClickFavourit = async (status, item) => {
        setisFavourite(!isFavourite)

        if (favourite._id) {//update
            let data = {
                ...item,
                isFavourite: status
            }
            const res = await updateFavourite(favourite._id, data)
            console.log('res', res)
            if (res.error) {

            } else if (res.payload) {

            }

        }
    };



    console.log('favourite', favourite)

    return (
        <div className="bg-white w-full sm:ml-0 sm:w-[90%] ml-16 py-4 px-2">
            <div id="result " className="w-1/2 relative sm:w-full">
                <div className="w-full fixed  bg-white top-16 ">
                <h1 className="text-red-600    font-semibold  px-4 py-4  w-fit text-2xl ">Your Favourite Tutors</h1></div>
                {favourite.length > 0
                    &&
                    favourite.map((item, i) =>
                        <Link to={'/showProfile/' + item.tutorId} key={i}>
                            <div className="my-10 mx-4 py-4 shadow-md shadow-slate-400 h-auto w-full rounded-lg  flex  " key={i}>
                                <div className="flex  flex-row w-full">
                                    <img
                                        className="rounded-full h-28 w -28 mx-10 border-red-600 border-2"
                                        src="https://www.fakepersongenerator.com/Face/female/female20161025115339539.jpg"
                                        alt=""
                                    />
                                    <div className="p-1 text-xs flex flex-col text-slate-600 py-8">
                                        <div className="flex flex-col p-1">
                                            <h1 className="text-lg font-bold text-blue-900">
                                                {item.tutorName}
                                            </h1>
                                            {/* {
                                                isFavourite ?
                                                    <button
                                                        className={"bg-[#837e7a] text-white w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-9"}
                                                        onClick={(e) => onClickFavourit(false , item)}
                                                    >
                                                        {"unfavourite"}
                                                    </button>
                                                    :
                                                    <button
                                                        className={"bg-[#F8AF6A] text-white w-24 h-11 rounded-md xs:w-20 xs:p-1 xs:h-9"}
                                                        onClick={(e) => onClickFavourit(true , item)}
                                                    >
                                                        {"Favourite"}
                                                    </button>
                                            }
                                            } */}
                                            <span className="">online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Favourite