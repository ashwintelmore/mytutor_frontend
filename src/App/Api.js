
import axios from "axios";
// const END_POINT = "https://odd-pear-fox-hem.cyclic.app/api"
const END_POINT = "http://localhost:5000/api"


export const getAllUser = async () => {

    return await axios.get(`${END_POINT}/allUsers`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })

};

export const getUser = async (id) => {
    return await axios.get(`${END_POINT}/getUser/${id}`)
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            return error.response
        })

};

export const register = async (data) => {
    return await axios.post(`${END_POINT}/register`, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });
};

export const login = async (data) => {
    return await axios.post(`${END_POINT}/login`, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });
};