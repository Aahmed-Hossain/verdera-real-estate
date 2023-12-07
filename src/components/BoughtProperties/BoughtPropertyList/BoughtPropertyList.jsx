
import Loading from "../../shared/Loading/Loading";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import PaymentModal from "../../../pages/DashBoard/User/Payment/PaymentModal";
import useAuth from "../../../hooks/useAuth";
/* eslint-disable react/prop-types */
const BoughtPropertyList = ({ item, isLoading, refetch }) => {
  const {
    _id,
    agent_email,
    agent_name,
    customerName,
    date,
    price,
    property_area,
    property_image,
    property_location,
    status,
    property_title,
  } = item;
  const {user} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }
  const [paymentInfo, setpaymentInfo] =useState({
    payment :{name: user?.displayName, email:user?.email, image: user?.photoURL,  payment_time: new Date(),
     property_title,
      property_location, property_area, price,agent_name,agent_email,property_id:_id }
 });
  
  if (isLoading) {
    return <Loading></Loading>
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
      axiosSecure.delete(`/offers/${id}`)
    .then(res=> {
        console.log('cofirm delete', res.data);
        refetch();
        Swal.fire("Yes", "Deleted Successfully", "success")
    })
    });
  };



  
  return (
    <div className=" ">
      <div className="flex items-center justify-between gap-2  py-2 border border-slate-200 rounded-xl mb-4">
        {/* left div */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDelete(_id)}
            className=" btn-circle btn-sm opacity-50 ml-2 hover:opacity-70 bg-black text-white"
          >
            X
          </button>
          <img
            className="w-[15rem] rounded-xl flex items-start"
            src={property_image}
            alt=""
          />
          <div>
            <p className="text-xl font-semibold text-green-500">
              {property_title}
            </p>
            
            <p className="text-[#A2A2A2]">Location: {property_location}</p>
            <p className="text-[#A2A2A2]">Customer: {customerName}</p>
            <p className="text-[#A2A2A2]">Offered Price: {price}</p>
            <p className="text-[#A2A2A2]">Agent Name: {agent_name}</p>
            <p className="text-[#A2A2A2]">Email: {agent_email}</p>
            <p className="text-[#A2A2A2] font-semibol">
              Property Area: {property_area}
            </p>
            <p className="text-[#A2A2A2]">Date: {date}</p>
            
          </div>
        </div>
        {/* right div */}
        <div className="flex items-center gap-5 pr-2">
          <div>
          {status === "Accepted" ? <button
        // disabled={}
        onClick={()=> setIsOpen(true)}
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight w-full'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-400 opacity-50 rounded-full hover:bg-green-500'
          ></span>
          <span
            className='relative'>Pay</span>
        </button> : ''}


          <p className="text-md">Status: <span className="text-blue-400 font-semibold"> {status}</span></p>
           
          </div>
        </div>
        <PaymentModal  closeModal={closeModal} isOpen={isOpen} paymentInfo={paymentInfo}></PaymentModal>
      </div>


      
    </div>
  );
};

export default BoughtPropertyList;
