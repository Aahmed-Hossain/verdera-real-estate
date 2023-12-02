import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/shared/Loading/Loading";
import WishListRow from "./WishListRow";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import useAuth from "../../../../hooks/useAuth";

const MyWishList = () => {
  const {user } = useAuth();
  const email = user.email;
    const {data:wishList=[], isLoading, refetch} = useQuery({
        queryKey: ['wishList'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/wishList/${email}`);
            return res.data;
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }
    // console.log(wishList);
    return (
        <>
        <PageTitle title={'Dashboard | WishList'}></PageTitle>
    
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
                          Agent
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
                          Delete
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                          Update
                        </th>
                      </tr>
                    </thead>
                    <tbody>{/* wish list row data */
                    wishList.map(item=> <WishListRow 
                      key={item._id}
                      item={item}
                      isLoading={isLoading}
                      refetch={refetch}
                    ></WishListRow>)
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

export default MyWishList;