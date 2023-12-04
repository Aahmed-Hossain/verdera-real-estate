/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const WishListRow = ({item ,refetch}) => {
    const navigate = useNavigate();

    const handleOfferNow = (id) => {
      const dataToSend = item;
        navigate(`/offerNow/${id}`, { state: { data: dataToSend } })
    }
    const handleRemove = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/wishList/${id}`).then((res) => {
              if (res.data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "This Item has been deleted.",
                  icon: "success",
                });
                refetch();
              }
            });
          }
        });
      };
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={item?.property_image}
                className='mx-auto object-cover rounded h-12 w-15 '
              />
            </div>
          </div>
          
        </div>
        
      </td>
      {/* Property title td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
        <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{item?.property_title}</p>
          </div>
        </td>
      {/* Property agent td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
        <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{item?.agent_name}</p>
            <p className='text-gray-900 whitespace-no-wrap'>{item?.email}</p>
          </div>
        </td>
         {/* Property location td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{item?.property_location}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${item?.price_range[0] + " - $" + item?.price_range[1]}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative text-blue-500 inline-block px-3 py-1 font-semibold  leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-blue-100 opacity-50 rounded-full '
          ></span>
          <span className='relative'>{item?.verification_status}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
        onClick={()=> handleRemove(item._id)}
        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Remove</span>
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button 
        onClick={()=> handleOfferNow(item._id)}
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span
            className='relative'>Offer</span>
        </button>
      </td>
    </tr>
    );
};

export default WishListRow;