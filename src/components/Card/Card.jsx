/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";

import Button from "../shared/Button/Button";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading/Loading";
const Card = ({ item,isLoading }) => {
  const {
    _id,
    property_image,
    agent_image,
    property_area,
    verification_status,
    price_range,
    property_title,
    property_location,
    agent_email,
    agent_name,
  } = item;
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 group">
      <img
        className="object-cover object-center w-full h-60 transition-transform transform group-hover:scale-105"
        src={property_image}
        alt="avatar"
      />
      <div className="flex items-center justify-center px-6 py-3 bg-gray- bg-[#61d473]">
        <Link to={`/allProperties/propertiesDetails/${_id}`}>
          <Button value={"Details"}></Button>
        </Link>
      </div>
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {property_title}
        </h1>
        <div className="flex items-center gap-x-2 mt-2">
          <img
            className="object-cover w-16 h-16 rounded-full"
            src={agent_image}
            alt=""
          />

          <div>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {agent_name}
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400">
              {agent_email}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 font-semibold text-md text-gray-700 dark:text-gray-200 gap-1">
          <BiArea /> Area: {property_area}
        </div>
        <div className="flex items-center font-semibold text-md text-gray-700 dark:text-gray-200 gap-1">
          <MdOutlineVerifiedUser /> Status:{" "}
          <span className="text-blue-500 text-xl"> {verification_status}</span>
        </div>
        <div className="flex gap-1 items-center font-semibold text-md ">
          <h1>
            <AiOutlineDollarCircle />
          </h1>
          <p className=" text-gray-700 dark:text-gray-400">
            Price Range: $ {price_range[0] + "-" + price_range[1]}
          </p>
        </div>

        <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200 gap-1 -ml-1">
          <h1 className="font-bold text-xl">
            <MdOutlineLocationOn />
          </h1>
          <h1>Location: {property_location}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
