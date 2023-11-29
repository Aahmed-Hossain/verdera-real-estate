import useOffers from "../../hooks/useOffers";
import Loading from './../shared/Loading/Loading';
import BoughtPropertyList from "./BoughtPropertyList/BoughtPropertyList";
import img from '../../assets/images/logo/offerImg.jpg'

const BoughtProperties = () => {
    const  [offers, isLoading, refetch] = useOffers();
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="w-11/12 mx-auto pt-[5rem]">
            <div className="relative h-[20rem] mb-2">
        <img src={img} className="h-[20rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
      </div>
            {
                offers?.map(item=> <BoughtPropertyList key={item._id}
                item={item} isLoading={isLoading} refetch={refetch}></BoughtPropertyList>)
            }
        </div>
    );
};

export default BoughtProperties;