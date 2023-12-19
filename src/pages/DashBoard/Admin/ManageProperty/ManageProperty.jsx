import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../../hooks/useAxiosPublic";
import ManagePropertyList from "./ManagePropertyList";
import PageTitle from "../../../../components/PageTitle/PageTitle";



const ManageProperty = () => {
    const { data: manageProperty = [],isLoading, refetch } = useQuery({
        queryKey: ["manageProperty"],
        queryFn: async () => {
          const res = await axiosPublic.get("/properties/verifiyStatus");
          return res.data;
        },
      });
    //   if(isLoading){
    //     return <Loading></Loading>
    // }
    console.log(manageProperty);
    return (
        <div className="w-11/12 mx-auto ">
        {/* <div className="relative h-[20rem] mb-2">
    <img src={img} className="h-[20rem] w-full rounded-xl" />
    <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
  </div> */}
        {
            manageProperty?.map(item=> <ManagePropertyList key={item._id}
            item={item} isLoading={isLoading} refetch={refetch}></ManagePropertyList>)
        }
        <PageTitle title={"Dashboard | Manage Properties"}></PageTitle>
    </div>
    );
};

export default ManageProperty;