import axios from "axios"
const endpoint="http://localhost:3000/";

const   getAllCatagories= async () => {
    try {
        const resp = await axios.get(endpoint+"catagories",{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
        return resp.data;
    } catch (err) {
        return err.response;
    }
};
const   AddNewCatagory= async (obj) => {
    try {
        const resp = await axios.post(endpoint+"catagories/",obj,{
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
const   DeleteCatagory= async (id) => {
    try {
        const resp = await axios.delete(endpoint+"catagories/"+id,{
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
const   getDetailedCatagory= async (id) => {
    try {
        const resp = await axios.get(endpoint+"catagories/"+id,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err;
    }
};
const   UpdateCatagory= async (id,body) => {
    try {
        const resp = await axios.patch(endpoint+"catagories/"+id,body,{
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

export {UpdateCatagory,getDetailedCatagory,getAllCatagories,AddNewCatagory,DeleteCatagory};