import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./useAxiosPublic";

const useProperties = () => {
    const {data:properties=[], isLoading, refetch, isError} =  useQuery({
        queryKey: ['properties'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/properties')
            return res.data;
        }
    })
    return [properties, isLoading,refetch,isError]
};

export default useProperties;