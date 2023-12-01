import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosPublic } from './useAxiosPublic';

const useAddedProperties = () => {
    const {user} = useAuth();
    const email = user?.email;
    const {data:addedProperties=[], isLoading, refetch} = useQuery({
        queryKey:['addedProperties', email],
        queryFn: async()=>{
             const res = await axiosPublic.get(`/properties/addedProperties?email=${email}`)
             return res.data;
        }
    });
    return [addedProperties, isLoading, refetch]
};

export default useAddedProperties;