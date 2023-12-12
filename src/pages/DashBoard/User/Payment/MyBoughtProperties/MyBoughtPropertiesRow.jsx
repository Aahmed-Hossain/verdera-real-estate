/* eslint-disable react/prop-types */


const MyBoughtPropertiesRow = ({mySoldProperty}) => {
    return (
        <tr>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt=' image'
                src={mySoldProperty?.payment?.property_image}
                className='mx-auto object-cover rounded h-16 w-16 '
              />
            </div>
          </div>
          
        </div>
        
      </td>
        
        {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
          <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.property_image}</p>
            </div>
          </td> */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' >
          <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.property_title}</p>
            </div>
          </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.property_location}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.agent_name}</p>
          <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.agent_email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>$ {mySoldProperty?.payment?.price}</p>
        </td>
        {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{mySoldProperty?.payment?.payment_time}</p>
        </td> */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap '>
          <h4 className="font-semibold">{mySoldProperty?.transactionId}</h4> <br />
          {mySoldProperty?.payment?.payment_time} 
          </p>
        </td>
      </tr>
    );
};

export default MyBoughtPropertiesRow;