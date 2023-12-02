import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const PropertiesDetails = () => {
  const { user } = useAuth();
  const email = user?.email;
  const propertyDetails = useLoaderData();
  // console.log(propertyDetails);
  const {
    _id,
    agent_email,
    agent_name,
    agent_image,
    price_range,
    property_category,
    property_image,
    property_location,
    property_title,
    verification_status,
    property_area,
  } = propertyDetails;

  const handleWishList = () => {
    const wishList = {
      email,
      agent_email,
      agent_name,
      price_range,
      property_image,
      property_location,
      property_title,
      verification_status,
      property_area
    };
    axiosSecure
      .post(`/wishList`, wishList)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire("Great!", `${property_title} added to to wish list successfully!` , "success");
        }
        //  navigate("/wishList");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mb-8 pt-[5rem]">
      <PageTitle title={"Verdera | Property Details"}></PageTitle>
      <h2 className="font-extrabold text-center uppercase text-[#61d473] my-4 text-4xl">
        {property_category}
      </h2>
      {/* upper div */}
      <div className="w-full ">
        <div className="flex justify-between ">
          <h2 className="font-extrabold text-4xl mb-2">{property_title}</h2>
          <button 
          onClick={handleWishList}
          className="flex flex-col justify-center items-center bg-[#61d473] px-3 hover:bg-green-400 cursor-pointer rounded-md">
            <p className="font-semibold">Wish List</p>{" "}
            <h3 className="text-2xl font-bold">
              <CiBookmarkCheck></CiBookmarkCheck>
            </h3>
          </button>
        </div>

        <div className="flex font-semibold items-center text-lg my-2 gap-1 -ml-1 text-[#33333380]">
          <h1 className=" text-xl">
            <MdOutlineLocationOn />
          </h1>
          <h1>Location: {property_location}</h1>
        </div>
        <div className="relative">
          <img
            className="rounded-xl h-[30rem] w-full"
            src={property_image}
            alt=""
          />
          <span className="absolute top-4 font-bold right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
            Price:$
            {price_range[0] + "-" + price_range[1]}
          </span>
        </div>
      </div>
      {/* lower div */}
      <div className="flex flex-col my-2">
        <div className=" mx-auto space-y-3">
          <div className="flex items-center gap-x-2 my-3 ">
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
            <div className="border-l-2 border-green-500 ml-3 text-xl">
              <h2 className="text-[#33333380] mx-2">Agent</h2>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">DESCRIPTION:</h3>
            <p className="text-[#33333380]">{propertyDetails?.description}</p>
          </div>
          <h4 className="text-md font-semibold">
            Property Area:
            <span className="text-green-500 font-bold text-xl">
              {property_area} Sq. ft.
            </span>
          </h4>
          <h5 className="text-md font-semibold">
            Verification Status:
            <span className="tex-xl text-blue-400 ml-1 ">
              {verification_status}
            </span>
          </h5>
        </div>
        <div className=" flex mx-auto">
          <Link
            to={`/offerNow/${_id}`}
            className="my-8 px-16 mx-auto py-2 da font-bold border-2 border-gray-600 bg-[#61d473] rounded-md cursor-pointer text-xl text-white dark:text-gray-200"
          >
            Offer Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
