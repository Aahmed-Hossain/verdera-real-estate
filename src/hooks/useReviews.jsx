import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useReviews = () => {
    const {data:reviews=[], isLoading, refetch} = useQuery({
        queryKey:['reviews'],
        queryFn: async()=>{
             const res = await axiosSecure.get(`/reviews`)
             return res.data;
        }
    })
    return [reviews, isLoading, refetch]
};

export default useReviews;