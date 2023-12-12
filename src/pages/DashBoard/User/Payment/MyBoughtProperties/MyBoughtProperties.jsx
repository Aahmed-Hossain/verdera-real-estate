import { useQuery } from "@tanstack/react-query";
import useRole from "../../../../../hooks/useRole";
import MyBoughtPropertiesRow from "./MyBoughtPropertiesRow";
import PageTitle from "../../../../../components/PageTitle/PageTitle";
import { axiosSecure } from "../../../../../hooks/useAxiosSecure";

const MyBoughtProperties = () => {
    const [userRole] = useRole();
    const email = userRole?.email;
  
    const { data: mySoldProperties = [] } = useQuery({
      queryKey: ["mysoldProperties", email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payment/specificUser?email=${email}`
        );
        return res.data;
      },
    });
  
    console.log(mySoldProperties);
    return (
        <>
      <PageTitle title={"Dashboard | My Bought Property"}></PageTitle>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal ">
                <thead>
                  <tr>
                
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                     Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    > Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Agent
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                         Price($) 
                    </th>
                    {/* <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Date
                    </th> */}
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Transaction ID & date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mySoldProperties.map((mySoldProperty) => (
                    <MyBoughtPropertiesRow
                      key={mySoldProperty._id}
                      mySoldProperty={mySoldProperty}
                    ></MyBoughtPropertiesRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default MyBoughtProperties;