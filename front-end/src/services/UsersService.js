import axios from "axios"
const endpoint="http://localhost:3000/";

const   getUser = async (id) => {
    try {
        const resp = await axios.get(endpoint+"users/"+id,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }});
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err.response;
    }
};
const   AddNewUser= async (obj) => {
    try {
        const resp = await axios.post(endpoint+"users/",obj,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            return resp.data;
        // return resp.data;
    } catch (err) {
        return err.response;
    }
};
const   getAllUsers= async () => {
    try {
        const resp = await axios.get(endpoint+"users",{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
        return resp.data;
    } catch (err) {
        return err.response;
    }
};
const   DeleteUser= async (id) => {
    try {
        const resp = await axios.delete(endpoint+"users/"+id,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            // console.log(resp)
            return resp.data;
        // return resp.data;
    } catch (err) {
        return err.response;
    }
};
const   UpdateUser= async (id,body) => {
    try {
        const resp = await axios.patch(endpoint+"users/"+id,body,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            // console.log(resp)
            return resp.data;
        // return resp.data;
    } catch (err) {
        return err.response;
    }
};
export {UpdateUser,DeleteUser,getAllUsers, getUser,AddNewUser};