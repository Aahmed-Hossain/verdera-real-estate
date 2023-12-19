
import { axiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
// todo: delete if not use any where
const useRole = () => {
  const {user} = useAuth();
  const email = user?.email;
    const { data: userRole = [], isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/user/${email}`);
          return res.data;
        },
      });
    return [userRole, isLoading,refetch]
};

export default useRole;