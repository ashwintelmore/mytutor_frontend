
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

export const getUser = async (id) => {
    return await axios.get(`${END_POINT}/getUser/${id}`)
        .then(function (response) {
            // handle success
            return response
        })
        .catch(function (error) {
            // handle error
            console.log('error :>> ', error);
            return error.response
        })

};

export const createPost = async (data) => {
    const payload = { payload: { ...data } }
    // return
    return await axios.post(`${END_POINT}/createpost`, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data
        });
};
