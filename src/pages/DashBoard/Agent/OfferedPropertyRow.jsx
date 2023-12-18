/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import axios from "axios";

const OfferedPropertyRow = ({ offer, refetch }) => {
  
  const handleAccept = (id) => {
    Swal.fire({
      title: `Do You Want to Accept ${offer?.property_title}?`,
      text: "The Status will be Accepted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eea4a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept!",
    }).then((result) => {
      if (result.isConfirmed) {
        const additionalInfo = {
          property_title: offer?.property_title,
          property_category: offer?.property_category,
          property_location: offer?.property_location,
          property_area: offer?.property_area,
          agent_email: offer?.agent_email,
          email: offer?.email,
        };
  
        axios.put(`/allOffers/accepted/${id}`, additionalInfo)
          .then((res) => {
            refetch();
            Swal.fire("Yes", `Accepted ${offer?.property_title} Successfully`, "success");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error", "Failed to accept offer", "error");
          });
      }
    });
  };

  const handleReject = (id) => {
    Swal.fire({
      title: `Do You Want to Reject ${offer?.property_title}?`,
      text: "The Status will be Rejected !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2eeff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject!",
    }).then((result) => {
      if (result.isConfirmed)
      axiosSecure.put(`/allOffers/rejected/${id}`)
    .then(res=> {
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
        <span className={`relative  inline-block px-3 py-1 font-semibold  leading-tight ${offer.status=== 'Rejected' ? 'text-red-400': offer.status === 'Accepted' ? 'text-blue-500' : ''}`}>
          <span
            aria-hidden='true'
            className='absolute inset-0 opacity-50 rounded-full '
          ></span>
          <span className='relative'>{offer?.status}</span>
        </span>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        { (offer.status === 'Accepted' || offer.status === 'Rejected'  )  ?  '' :  <button
        onClick={()=> handleReject(offer._id)}
        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight rounded-full hover:bg-red-400'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative  '>Reject</span>
        </button>}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {
          (offer.status === 'Rejected' || offer.status === 'Accepted' ) ? '' :  
          <button
        onClick={()=> handleAccept(offer._id)}
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight hover:bg-green-400 rounded-full'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200  opacity-50 rounded-full'
          ></span>
          <span className='relative'>Accept</span>
        </button >}
      </td>
    </tr>
  )
}
export default OfferedPropertyRow;
