import { useQuery } from "@tanstack/react-query";
import useRole from "./useRole";
import { axiosSecure } from "./useAxiosSecure";


const useSoldProperties = () => {
    const [userRole] = useRole();
    const email = userRole?.email;
    const {data: soldProperties = []} = useQuery({
        queryKey:['soldProperties'],
        queryFn: async()=>{
             const res = await axiosSecure.get(
                `/payment/specifiAgent?email=${email}`
              )
             return res.data;
        }
    })
    return [soldProperties]
};

export default useSoldProperties;