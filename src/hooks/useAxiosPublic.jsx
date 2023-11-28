import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: `http://localhost:5000/properties`,
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;