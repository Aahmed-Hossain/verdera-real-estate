import axios from "axios";
import { axiosSecure } from "../../hooks/useAxiosSecure";



 export const createPaymentIntent = async (price) => {
    const {data} = await axiosSecure.post('/createPaymentIntent',price);
    return data;
 };

 export const savePaymentInfo = async(paymentData)=> {
   const {data} = await axiosSecure.post('/payments', paymentData);
   return data;
 };




