/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useReviews from "../../../../hooks/useReviews";
import img from '../../../../assets/images/logo/quote-left 1.jpg'
const MyReview = () => {
  const [reviews] = useReviews();
  // console.log(reviews);
  return (
    <div className="my-20">
<h1 className="text-center text-4xl font-bold my-2"> Latest Reviews Of Our Valued Customer</h1>
<h1 className="text-green-500 text-xl font-semibold mt-2 text-center"> Your Quatations Here</h1>
<h1 className="text-sm  dark:text-gray-200 text-center my-4"> Verdera is committed to providing unparalleled service in the real estate industry. <br/> Whether you're searching for a cozy apartment, a family-friendly house.</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-12">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col space-y-4 justify-center items-center mx-auto  w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 border">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-blue-400"
                  alt="Testimonial avatar"
                  src={review.image}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
               {review.property_title}
              </h2>

              <div>
                <img className="w-[7%] mx-auto mt-3" src={img} alt="" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{review.description}
              </p>
              </div>

              <div className="flex justify-end mt-4">
                <a
                  href="#"
                  className="text-lg font-medium text-green-600 dark:text-blue-300"
                  tabIndex="0"
                  role="link"
                >
                  {review.name}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyReview;
