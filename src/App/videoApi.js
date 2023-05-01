import axios from "axios";
const END_POINT = process.env.REACT_APP_END_POINT

export const generateMeetingId = async (data) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0NDZkNjNmYy1mYmRkLTRhNWMtOTdmYy02M2JjMzIwZDlhNzMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4MDMzNTIwNSwiZXhwIjoxNjg4MTExMjA1fQ.wmZi4tXHBvMx8eHUTr0hPBhZRb961-l8QFvTXdxyL80'
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
        method: "POST",
        headers: {
            authorization: `${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    //Destructuring the roomId from the response
    console.log('res :>> ', res);

    try {
        const { roomId } = await res.json();
        return roomId
    } catch (error) {
        console.log('error :>> ', error);

        return error
    }

};
export const createMeeting = async (data) => {

    const payload = {
        payload: data
    }
    return await axios.post(`${END_POINT}/createmeeting`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });

};

export const getUserallMeets = async (id) => {

    return await axios.get(`${END_POINT}/getuserallmeetings/${id}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });

};

