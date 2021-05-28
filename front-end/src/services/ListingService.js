import axios from "axios"
const endpoint="http://localhost:3000/";

const   getAllListings= async () => {
    try {
        console.log()
        const resp = await axios.get(endpoint+"listings",{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err.response;
    }
};
const   getDetailedListing= async (id) => {
    try {
        const resp = await axios.get(endpoint+"listings/"+id,{
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
const   AddBidToListing= async (id,obj) => {
    console.log(obj)
    try {
        const resp = await axios.post(endpoint+"listings/"+id+"/bids",obj,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            return resp.data;
        // return resp.data;
    } catch (err) {
        return err.response;

        // Handle Error Here
        // return err;
    }
};
const   AddNewListing= async (obj) => {
    console.log(obj)
    try {
        const resp = await axios.post(endpoint+"listings/",obj,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            return resp.data;
        // return resp.data;
    } catch (err) {
        return err.response;

        // Handle Error Here
        // return err;
    }
};
const   DeleteListing= async (id) => {
    try {
        const resp = await axios.delete(endpoint+"listings/"+id,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            // console.log(resp)
            return resp.data;
        // return resp.data;
    } catch (err) {
        // console.log(err)


        return err.response;

        // Handle Error Here
        // return err;
    }
};
const   UpdateListing= async (id,body) => {
    console.log(body)
    try {
        const resp = await axios.patch(endpoint+"listings/"+id,body,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).token:""}`
            }}
            );
            // console.log(resp)
            return resp.data;
        // return resp.data;
    } catch (err) {
        // console.log(err)


        return err.response;

        // Handle Error Here
        // return err;
    }
};
export { UpdateListing,DeleteListing,getAllListings ,getDetailedListing,AddBidToListing,AddNewListing};