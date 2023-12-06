import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from './useAxiosPublic';

const useReviews = () => {
    const {data:reviews=[], isLoading, refetch} = useQuery({
        queryKey:['reviews'],
        queryFn: async()=>{
             const res = await axiosPublic.get(`/reviews`)
             return res.data;
        }
    })
    return [reviews, isLoading, refetch]
};

export default useReviews;