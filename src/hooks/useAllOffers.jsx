import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useAllOffers = () => {
    const {data:allOffers=[], isLoading, refetch, isError} =  useQuery({
        queryKey: ['allOffers'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/allOffers')
            return res.data;
        }
    })
    return [allOffers, isLoading,refetch,isError]
};

export default useAllOffers;