
import axios from "axios";
// const END_POINT = "https://odd-pear-fox-hem.cyclic.app/api"
const END_POINT = "http://localhost:5000/api"


export const getAllUser = async () => {

    return await axios.get(`${END_POINT}/allUsers`)
        .then(function (response) {
            // handle successy
            console.log(response);
            return response
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return error.response
        })

};

export const getUser = async (id) => {
    return await axios.get(`${END_POINT}/getUser/${id}`)
        .then(function (response) {
            // handle success
            console.log(response);
            return response
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return error.response
        })

};

export const register = async (data) => {
    return await axios.post(`${END_POINT}/register`, data)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error.response
        });
};

export const login = async (data) => {
    console.log('data :>> ', data);
    return await axios.post(`${END_POINT}/login`, data)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error.response
        });
};