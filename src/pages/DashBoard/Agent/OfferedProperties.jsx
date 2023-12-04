
import useOffers from "../../../hooks/useOffers";
import PageTitle from "../../../components/PageTitle/PageTitle";
import OfferedPropertyRow from "./OfferedPropertyRow";

const OfferedProperties = () => {
    const [offers, isLoading, refetch] = useOffers();
     return (
        <>
        <PageTitle title={'Dashboard | Listings'}></PageTitle>
    
          <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-8'>
              <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                  <table className='min-w-full leading-normal'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Image
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Location
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          BUYER
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Price
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Status
                        </th>
                      
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Reject
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          ACCEPT
                        </th>
                      </tr>
                    </thead>
                    <tbody>{/* Room row data */
                    offers.map(offer=> <OfferedPropertyRow key={offer._id}
                      offer={offer}
                      isLoading={isLoading}
                      refetch={refetch}
                    ></OfferedPropertyRow>)
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default OfferedProperties;