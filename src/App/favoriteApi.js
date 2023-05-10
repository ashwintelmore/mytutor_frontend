import React from "react";
import axios from "axios";
const END_POINT = process.env.REACT_APP_END_POINT


export const createFavourite = async (data) => {
    const payload = { payload: data }
    console.log('data', data)
    // return
    return await axios.post(`${END_POINT}/createFavourite`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};

export const updateFavourite = async (id, data) => {
    const payload = {
        payload: data
    }
    // return
    return await axios.put(`${END_POINT}/updateFavourite/${id}`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};
export const getFavourites = async (learnerId = "", tutorId = "") => {

    let url = `tutorId=${tutorId}&learnerId=${learnerId}`
    // if (tutorId != '' && learnerId != '') {
    //     url = `tutorId=${tutorId}&learnerId=${learnerId}`
    // } else if (tutorId != '') {
    //     url = `tutorId=${tutorId}`
    // } else if (learnerId != '') {
    //     url = `learnerId=${learnerId}
    // }
    console.log('url', url)
    return await axios.get(`${END_POINT}/getFavourites?${url}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};