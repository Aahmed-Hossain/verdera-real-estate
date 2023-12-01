import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MdOutlineLocationOn } from "react-icons/md";

const PropertiesDetails = () => {
  const propertyDetails = useLoaderData();
  // console.log(propertyDetails);
  return (
    <div className="mb-8 pt-[5rem]">
      <PageTitle title={"Verdera | Property Details"}></PageTitle>
      <h2 className="font-extrabold text-center uppercase text-[#61d473] my-4 text-4xl">
        {propertyDetails.property_category}
      </h2>
      {/* upper div */}
      <div className="w-full ">
        <h2 className="font-extrabold text-4xl mb-2">
          {propertyDetails.property_title}
        </h2>

        <div className="flex font-semibold items-center text-lg my-2 gap-1 -ml-1 text-[#33333380]">
          <h1 className=" text-xl">
            <MdOutlineLocationOn />
          </h1>
          <h1>Location: {propertyDetails?.property_location}</h1>
        </div>
        <div className="relative">
          <img
            className="rounded-xl h-[30rem] w-full"
            src={propertyDetails.property_image}
            alt=""
          />
          <span className="absolute top-4 font-bold right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
            Price:$
            {propertyDetails.price_range[0] +
              "-" +
              propertyDetails.price_range[1]}
          </span>
        </div>
      </div>
      {/* lower div */}
      <div className="flex flex-col my-2">
        <div className=" mx-auto space-y-3">
          <div className="flex items-center gap-x-2 my-3 ">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={propertyDetails.agent_image}
              alt=""
            />

            <div>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                {propertyDetails.agent_name}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {propertyDetails.agent_email}
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
              {propertyDetails.property_area} Sq. ft.
            </span>
          </h4>
          <h5 className="text-md font-semibold">
            Verification Status:
            <span className="tex-xl text-blue-400 ml-1 ">
              {propertyDetails.verification_status}
            </span>
          </h5>
        </div>
        <div className=" flex mx-auto">
          <Link
            to={`/offerNow/${propertyDetails._id}`}
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
