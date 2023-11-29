import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";
import useAuth from "./useAuth";

const useOffers = () => {
    const {user} = useAuth();
    const {data:offers=[], isLoading, refetch} = useQuery({
        queryKey:['offers'],
        queryFn: async()=>{
             const res = await axiosPublic.get(`http://localhost:5000/offers?email=${user?.email}`)
             return res.data;
        }
    })
    return [offers, isLoading, refetch]
};

export default useOffers;