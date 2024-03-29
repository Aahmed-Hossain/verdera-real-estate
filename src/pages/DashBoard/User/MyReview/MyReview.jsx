/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useReviews from "../../../../hooks/useReviews";
import img from '../../../../assets/images/logo/quote-left 1.jpg'
import Heading from "../../../../components/shared/Heading";
import SubHeading from './../../../../components/shared/SubHeading';
import SubHeading2 from './../../../../components/shared/SubHeading2';

const MyReview = () => {
  const [reviews] = useReviews();
  return (
    <div className="mt-16">
<Heading text='Latest Reviews Of Our Valued Customer'/>
<SubHeading subHeading="Your trusted and Supportive Real Estate Company"/>
<SubHeading2 subHeading2={"Verdera is committed to providing unparalleled service in the real estate industry<.Whether you're searching for a cozy apartment, a family-friendly house."}/>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-12">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col space-y-4 justify-center items-center mx-auto  w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-green-500 rounded-full "
                  alt="Testimonial avatar"
                  src={review.image}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
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
                  className="text-lg  font-medium text-green-600"
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



