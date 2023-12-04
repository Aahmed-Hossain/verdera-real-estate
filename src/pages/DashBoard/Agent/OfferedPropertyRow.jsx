/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const OfferedPropertyRow = ({ offer, refetch }) => {

console.log(offer);
  const handleAccept = (id) => {
    Swal.fire({
      title: `Do You Want to Accept ${offer?.property_title}?`,
      text: "The Status will be Accepted !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eea4a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept!",
    }).then((result) => {
      if (result.isConfirmed)
      axiosSecure.put(`/allOffers/accepted/${id}`)
    .then(res=> {
        console.log('Made ', res.data);
        refetch();
        Swal.fire("Yes", `Accepted ${offer?.property_title}   Successfully`, "success")
    })
    });
  };


  const handleReject = (id) => {
    Swal.fire({
      title: `Do You Want to Reject ${offer?.property_title}?`,
      text: "The Status will be Rejected !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eea4a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept!",
    }).then((result) => {
      if (result.isConfirmed)
      axiosSecure.put(`/allOffers/rejected/${id}`)
    .then(res=> {
        console.log('Made Agent', res.data);
        refetch();
        Swal.fire("Yes", `Rejected ${offer?.property_title}   Successfully`, "success")
    })
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
                src={offer?.property_image}
                className='mx-auto object-cover rounded h-12 w-15 '
              />
            </div>
          </div>
          
        </div>
        
      </td>
      {/* Property title td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
        <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{offer?.property_title}</p>
          </div>
        </td>
         {/* Property location td */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{offer?.property_location}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{offer?.customerName}</p>
        <p className='text-gray-900 whitespace-no-wrap'>{offer?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${offer?.price}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <span className='relative text-blue-500 inline-block px-3 py-1 font-semibold  leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 opacity-50 rounded-full '
          ></span>
          <span className='relative'>{offer?.status}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        { offer.status === 'Accepted' ? <button
        onClick={()=> handleReject(offer._id)}
        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight rounded-full hover:bg-red-400'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Reject</span>
        </button> : ''}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {
          offer.status === 'Rejected' ? 
          <button
        onClick={()=> handleAccept(offer._id)}
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight hover:bg-green-400 rounded-full'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200  opacity-50 rounded-full'
          ></span>
          <span className='relative'>Accept</span>
        </button > : ''}
      </td>
    </tr>
  )
}

export default OfferedPropertyRow;
