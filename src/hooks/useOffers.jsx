import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxiosSecure";

const useOffers = () => {
    const {user} = useAuth();
    const {data:offers=[], isLoading, refetch} = useQuery({
        queryKey:['offers'],
        queryFn: async()=>{
             const res = await axiosSecure.get(`/offers?email=${user?.email}`)
             return res.data;
        }
    })
    return [offers, isLoading, refetch]
};

export default useOffers;