/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';
import Loading from './../../../../components/shared/Loading/Loading';
import { axiosPublic } from '../../../../hooks/useAxiosPublic';

const ManagePropertyList = ({item, isLoading, refetch}) => {
    if (isLoading) {
        return <Loading></Loading>
      }
      const {
        _id,
        agent_email,
        agent_name,
        property_area,
        property_image,
        property_location,
        property_title,
        price_range,
        
      } = item;
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
          axiosPublic.delete(`/properties/verifiyStatus/${id}`)
        .then(res=> {
            console.log('cofirm delete', res.data);
            refetch();
            Swal.fire("Yes", "Rejected Successfully", "success")
        })
        });
      };

      const handleVerify = (id) => {
        Swal.fire({
          title: "Do You Want to Verify This?",
          text: "Ther Property Will be Added To All Properties!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Verify it!",
        }).then((result) => {
          if (result.isConfirmed)
          axiosPublic.put(`/properties/verifiyStatus/${id}`)
        .then(res=> {
            console.log('Verified', res.data);
            refetch();
            Swal.fire("Yes", "Verified  Successfully", "success")
        })
        });
      };
    return (
        <div className=" ">
      <div className="flex items-center justify-between gap-2  py-2 border border-slate-200 rounded-xl mb-4">
        {/* left div */}
        <div className="flex items-center gap-3">
          <img
            className="w-[18rem] h-[12rem] rounded-xl object-cover flex items-start"
            src={property_image}
            alt=""
          />
          <div>
            <p className="text-xl font-semibold text-green-500">
              {property_title}
            </p>
            <p className="text-[#A2A2A2]">Location: {property_location}</p>
            <p className="text-[#A2A2A2]">Price Range: $ {price_range[0] + "-" + price_range[1]}</p>
            <p className="text-[#A2A2A2]">Agent Name: {agent_name}</p>
            <p className="text-[#A2A2A2]">Email: {agent_email}</p>
            <p className="text-[#A2A2A2] font-semibol">
              Property Area: {property_area} Sq. ft.
            </p>
            
          </div>
        </div>
        {/* right div */}
        <div className="flex flex-col ">
            {/* button */}
        <button
        onClick={() => handleVerify(_id)}
         className='px-5 py-5   bg-white text-md'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold  leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Verify</span>
        </span>
      </button>
      <button
       onClick={() => handleDelete(_id)}
      className='px-5 py-5 bbg-white text-md'>
        
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold t leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Reject</span>
        </span>
      </button>
        </div>
      </div>
    </div>
    );
};

export default ManagePropertyList;