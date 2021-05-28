import axios from "axios"
const endpoint="http://localhost:3000/";


const   AddCommentToListing= async (id,obj) => {
    try {
        const resp = await axios.post(endpoint+"listings/"+id+"/comments",obj,{
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
export { AddCommentToListing};