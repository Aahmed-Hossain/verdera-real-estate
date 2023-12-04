/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PropertyRow = ({ addedProperty, refetch }) => {
  // if(isLoading){
  //   return <Loading></Loading>
  // }

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
      if (result.isConfirmed) {
        axiosSecure.delete(`/properties/addedProperties/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: `${addedProperty?.property_title} has been deleted.`,
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
                src={addedProperty?.property_image}
                className='mx-auto object-cover rounded h-12 w-15 '
              />
            </div>
          </div>
          
        </div>
        
      </td>
      {/* Property title td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
        <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{addedProperty?.property_title}</p>
          </div>
        </td>
         {/* Property location td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{addedProperty?.property_location}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${addedProperty?.price_range[0] + " - $" + addedProperty?.price_range[1]}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <span className='relative text-blue-500 inline-block px-3 py-1 font-semibold  leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 opacity-50 rounded-full '
          ></span>
          <span className='relative'>{addedProperty?.verification_status}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
        onClick={()=> handleDelete(addedProperty._id)}
        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link
        to={`updateProperties/${addedProperty._id}`} 
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </Link >
      </td>
    </tr>
  )
}

export default PropertyRow;
