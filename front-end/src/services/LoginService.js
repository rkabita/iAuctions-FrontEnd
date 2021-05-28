import axios from "axios"
const endpoint="http://localhost:3000/";

const   LoginUser = async (user) => {
    try {
        const resp = await axios.post(endpoint+"login",user);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        return err.response;
    }
};
export default LoginUser;