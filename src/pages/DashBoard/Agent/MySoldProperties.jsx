
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../components/PageTitle/PageTitle";
import MySoldPropertyRow from "./MySoldPropertyRow";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const MySoldProperties = () => {
  const [userRole] = useRole();
  const email = userRole?.email;

  const { data: soldProperties = [] } = useQuery({
    queryKey: ["soldProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment/specifiAgent?email=${email}`
      );
      return res.data;
    },
  });

  console.log(soldProperties);

  return (
    <>
      <PageTitle title={"Dashboard | Sold Property"}></PageTitle>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase  font-bold"
                    >
                     Buyer Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                     Property Title
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
                      BUYER
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {soldProperties.map((soldProperty) => (
                    <MySoldPropertyRow
                      key={soldProperty._id}
                      soldProperty={soldProperty}
                    ></MySoldPropertyRow>
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

export default MySoldProperties;
