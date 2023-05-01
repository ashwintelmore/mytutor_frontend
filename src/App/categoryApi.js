
import axios from "axios";
// const END_POINT = "https:/ / odd - pear - fox - hem.cyclic.app / api"
const END_POINT = process.env.REACT_APP_END_POINT

export const getAllCategory = async () => {

    return await axios.get(`${END_POINT}/allCategory`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })

};

export const updateCategory = async (data) => {
    return await axios.post(`${END_POINT}/login`, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });
};
export const createCategory = async (data) => {
    return await axios.post(`${END_POINT}/login`, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response
        });
};