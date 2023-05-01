
import axios from "axios";
// const END_POINT = "https:/ / odd - pear - fox - hem.cyclic.app / api"
const END_POINT = process.env.REACT_APP_END_POINT


export const getAllPosts = async () => {

    return await axios.get(`${END_POINT}/getallposts`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};
export const getUserAllPosts = async (id) => {

    return await axios.get(`${END_POINT}/getallposts/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};

export const getPost = async (id) => {

    return await axios.get(`${END_POINT}/getPost/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data
        })

};


export const createPost = async (data) => {
    const payload = { payload: { ...data } }
    console.log(data)
    // return
    return await axios.post(`${END_POINT}/createpost`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};

export const updatePost = async (payload) => {

    // return
    return await axios.put(`${END_POINT}/updatePosts`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('error :>> ', error);
            return error.response.data
        });
};
