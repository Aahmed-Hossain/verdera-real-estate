import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: `https://real-estate-company-server.vercel.app`
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;