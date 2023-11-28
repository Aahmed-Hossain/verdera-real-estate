/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";
import Button from "../shared/Button/Button";
import useAuth from "../../hooks/useAuth";
const Card = ({item}) => {
    const {user} = useAuth();
    // console.log(user);
    const {property_image, agent_image} = item;
    return (
       <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 group">
    <img className="object-cover object-center w-full h-60 transition-transform transform group-hover:scale-105"  src={property_image} alt="avatar"/>
    <div className="flex items-center justify-center px-6 py-3 bg-gray- bg-[#61d473]">
    <Button value={"Details"}></Button>
    </div>
    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Patterson johnson</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

        <div className="flex items-center gap-x-2">
  <img
    className="object-cover w-16 h-16 rounded-full"
    src={agent_image}
    alt=""
  />

  <div>
    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{user?.displayName}</h1>
    <p className="text-base text-gray-500 dark:text-gray-400">{user?.email}</p>
  </div>
</div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 ">
       <h1 className="font-bold text-xl">  < MdOutlineLocationOn /></h1>
            <h1 className="px-1 text-md">California</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
           Something
        </div>
    </div>
</div>
    );
};

export default Card;