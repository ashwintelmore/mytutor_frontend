
import axios from "axios";
const END_POINT = process.env.REACT_APP_END_POINT


export const createRequest = async (data) => {
    const payload = { payload: data }
    console.log(data)
    // return
    return await axios.post(`${END_POINT}/createrequest`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};
export const updateRequest = async (data) => {
    console.log(data)
    // return
    return await axios.put(`${END_POINT}/updaterequest`, data)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};
export const getAllRequester = async (id) => {

    return await axios.get(`${END_POINT}/getAllRequesterReqs/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};
export const getAllRequested = async (id) => {

    return await axios.get(`${END_POINT}/getAllRequestedReqs/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};