import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
// todo: delete if not use any where
const useAllUsers = (id) => {
    const { data: users = [], isLoading,refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/${id}`);
          return res.data;
        },
      });
    return [users, isLoading,refetch]
};

export default useAllUsers;