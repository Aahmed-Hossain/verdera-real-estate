/* eslint-disable react/prop-types */
const MySoldPropertyRow = ({soldProperty}) => {
    // const {date, transactionId, email, image, name, payment_time, price, property_title,property_location} = soldProperty || {}
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='block relative'>
                <img
                  alt='profile'
                  src={soldProperty?.payment?.image}
                  className='mx-auto object-cover rounded h-16 w-16 '
                />
              </div>
            </div>
            
          </div>
          
        </td>
        {/* Property title td */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
          <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{soldProperty?.payment?.property_title}</p>
            </div>
          </td>
           {/* Property location td */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{soldProperty?.payment?.property_location}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{soldProperty?.payment?.name}</p>
          <p className='text-gray-900 whitespace-no-wrap'>{soldProperty?.payment?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{soldProperty?.payment?.price}</p>
        </td>
      </tr>
    );
};

export default MySoldPropertyRow;