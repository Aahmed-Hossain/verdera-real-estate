
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img from '../../../../assets/images/logo/quote-left 1.jpg'
import useReviews from "../../../../hooks/useReviews";
const MyReview = () => {
    const [reviews] = useReviews();
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col space-y-4 justify-center items-center mx-24 my-16">
              <img className="w-[5%]" src={img} alt="" />
              {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
              <p>{review.name}</p>
              <h3 className="text-xl font-semibold text-yellow-500 ">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyReview;
