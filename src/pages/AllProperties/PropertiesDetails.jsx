/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img from '../../assets/images/logo/quote-left 1.jpg'
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";
import ReviewModal from "../DashBoard/User/ReviewNow/ReviewModal";
const PropertiesDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }

  const { user } = useAuth();
  const email = user?.email;
  const propertyDetails = useLoaderData();
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
          Swal.fire("Great!", `${property_title} added to wish list successfully!` , "success");
        }
        //  navigate("/wishList");
      })
      .catch((error) => console.log(error));
  };
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/titleSpecific/${property_title}`);
      return res.data;
    },
  });
  const [reviewInfo, setReviewInfo] =useState({
     review :{name: user?.displayName, email:user?.email, image: user?.photoURL,  review_time: new Date(),
      property_title, property_location, property_area, price_range,agent_name,agent_email, }
  });

  return (
    <div className="mb-8 pt-[5rem]">
      <PageTitle title={"Verdera | Property Details"}></PageTitle>
      <h2 className="font-extrabold text-center uppercase text-[#61d473] my-4 text-3xl md:text-4xl lg:text-5xl">
        {property_category}
      </h2>
      {/* upper div */}
      <div className="w-full ">
        <div className="flex justify-between ">
          <h2 className="font-extrabold text-xl md:text-4xl lg:text-4xl">{property_title}</h2>
          <button 
          onClick={handleWishList}
          className="flex flex-col justify-center items-center bg-[#3ee757] px-3 hover:bg-green-400 cursor-pointer rounded-md hidden md:block lg:block hover:text-white">
            <p className="font-semibold">Wish List</p>
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
            className="rounded-xl h-[17rem] md:h-[30rem] w-full"
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
              className="object-cover w-16  h-16 rounded-full"
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
            className="my-2 py-2 h-[3rem] w-[10rem] text-center  mx-auto  font-bold border-2 border-gray-600 bg-[#61d473] rounded-md cursor-pointer text-white text-xl hover:text-2xl "
          >
            Offer Now
          </Link>
        </div>
      </div>
      <div className="flex justify-between md:justify-end">
{/* wish list button for small device only */}
      <button 
          onClick={handleWishList}
          className="flex flex-col justify-center items-center bg-[#3ee757] px-3 hover:bg-green-400 cursor-pointer rounded-md visible md:hidden lg:hidden hover:text-white">
            <p className="font-semibold">Mark Wish List</p>
            <h3 className="text-2xl font-bold">
              <CiBookmarkCheck></CiBookmarkCheck>
            </h3>
          </button>

          <button
          onClick={()=> setIsOpen(true)}
          className="flex flex-col justify-center items-center bg-[#3ee757] px-3 hover:bg-green-400 cursor-pointer rounded-md text-white">
            <p className="font-semibold">Leave a Review</p>{" "}
            <h3 className="text-2xl  font-bold">
              <MdOutlineRateReview ></MdOutlineRateReview>
            </h3>
          </button>
          </div>
          <ReviewModal
           isOpen={isOpen} closeModal={closeModal} reviewInfo={reviewInfo} refetch={refetch}></ReviewModal>
      {/* review section */}

     { reviews.length === 0 ? <div> <h2 className="font-bold text-center uppercase text-orange-500 my-4 text-2xl"> No Review Found  For "{property_title}"   </h2></div> : <div className="">
         
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-12">
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="flex flex-col space-y-4 justify-center items-center mx-auto  w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 border">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src={review?.image}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
               {review?.property_title}
              </h2>
              <div>
                <img className="w-[7%] mx-auto mt-3" src={img} alt="" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{review?.description}
              </p>
              <div className="flex items-center gap-x-2 my-3 ">
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
              </div>
              <div className="flex justify-end mt-4">
                <a
                  href="#"
                  className="text-lg font-medium text-green-600 dark:text-blue-300"
                  tabIndex="0"
                  role="link"
                >
                  {review?.name}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>}






    </div>
  );
};

export default PropertiesDetails;
