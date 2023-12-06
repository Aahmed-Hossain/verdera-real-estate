
import Loading from './../shared/Loading/Loading';
import BoughtPropertyList from "./BoughtPropertyList/BoughtPropertyList";
import PageTitle from "../PageTitle/PageTitle";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const BoughtProperties = () => {
const {user } = useAuth();
    const {data:offers=[], isLoading, refetch} = useQuery({
        queryKey:['offers',user?.email],
        queryFn: async()=>{
             const res = await axiosSecure.get(`/offers/user?email=${user?.email}`)
             return res.data;
        }
    })
    const {data: calculatePrice=[], } = useQuery({
        queryKey:['data',user?.email],
        queryFn: async()=>{
             const res = await axiosSecure.get(`/offers/accepted/calculatePrice?status=Accepted&email=${user?.email}`)
             return res.data;
        }
    })
    console.log(calculatePrice)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="w-11/12 mx-auto">
            <PageTitle title={'Verdera | My Property'}></PageTitle>
            {
                offers?.map(item=> <BoughtPropertyList key={item._id}
                item={item} isLoading={isLoading} refetch={refetch}></BoughtPropertyList>)
            }
        </div>
    );
};

export default BoughtProperties;