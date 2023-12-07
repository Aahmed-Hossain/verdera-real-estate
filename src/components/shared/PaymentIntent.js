import axios from "axios"


 export const createPaymentIntent = async (price) => {
    const {data} = await axios.post('http://localhost:5000/createPaymentIntent',price);
    return data;
 };

 export const savePaymentInfo = async(paymentData)=> {
   const {data} = await axios.post('http://localhost:5000/payments', paymentData);
   return data;
 };

 export const updatePaymentStatus = async (id, status) => {
   const { data } = await axios.patch(`http://localhost:5000/saleStatus/${id}`, null, {
     params: {
       status: status,
     },
   });
   return data;
 };

