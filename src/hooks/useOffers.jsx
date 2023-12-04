import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useRole from "./useRole";

const useOffers = () => {
    const [userRole] = useRole();
    const {data:offers=[], isLoading, refetch} = useQuery({
        queryKey:['offers',userRole?.email],
        queryFn: async()=>{
             const res = await axiosSecure.get(`/offers?email=${userRole?.email}`)
             return res.data;
        }
    })
    return [offers, isLoading, refetch]
};

export default useOffers;