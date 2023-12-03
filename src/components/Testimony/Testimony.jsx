/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ReviewCard1 from './Reviewcard1';
import ReviewCard2 from './ReviewCard2';
import ReviewCard3 from './ReviewCard3';
import ReviewCard4 from './ReviewCard4';

const Testimony = () => {
    return (

<div className='mt-12'>
<h1 className="text-center text-4xl font-bold my-2"> Our Exclusive Agents</h1>
<h1 className="text-green-500 text-xl font-semibold mt-2 text-center"> Expertise Is Here</h1>
<h1 className="text-sm  dark:text-gray-200 text-center my-4"> Verdera is committed to providing unparalleled service in the real estate industry. <br/> Whether you're searching for a cozy apartment, a family-friendly house.</h1>

<Swiper
  spaceBetween={40}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2000,
    reverseDirection: true,
  }}
  modules={[Autoplay]}
  className='my-8'
>
  <SwiperSlide><ReviewCard1></ReviewCard1></SwiperSlide>
  <SwiperSlide> <ReviewCard2></ReviewCard2></SwiperSlide>
  <SwiperSlide> <ReviewCard3></ReviewCard3></SwiperSlide>
  <SwiperSlide> <ReviewCard4></ReviewCard4></SwiperSlide>
</Swiper>
</div>
    );
};
export default Testimony;




