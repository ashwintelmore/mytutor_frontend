import React from "react";
import axios from "axios";
const END_POINT = process.env.REACT_APP_END_POINT


export const createCatgory = async (data) => {
    const payload = { payload: data }

    // return
    return await axios.post(`${END_POINT}/createCatgory`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};

export const updateCatgory = async (id, data) => {
    const payload = {
        payload: data
    }
    // return
    return await axios.put(`${END_POINT}/updateCatgory/${id}`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};
export const getCatgory = async (id) => {

    return await axios.get(`${END_POINT}/getCatgory/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};
export const getAlllCatgories = async () => {

    return await axios.get(`${END_POINT}/getallCategory`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};