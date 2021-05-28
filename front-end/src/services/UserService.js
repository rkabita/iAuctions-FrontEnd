import axios from "axios"
const endpoint="http://localhost:3000/";

const   RegisterUser = async (user) => {
    try {
        const resp = await axios.post(endpoint+"signup",user);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err.response;
    }
};
export default RegisterUser;