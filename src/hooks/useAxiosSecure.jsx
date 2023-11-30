import axios from "axios";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: `http://localhost:5000`, withCredentials: true
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use(response=> response, async error=> {
        console.log('error in interceptors', error.response);
        if(error.response && error.response.status ===401 || error.response.status ===403){
            await axiosSecure.get('/logout');
            navigate('/login')
        }
        return Promise.reject(error);
    })





    return axiosSecure;
};

export default useAxiosSecure;