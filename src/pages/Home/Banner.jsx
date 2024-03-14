import { Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slider1 from "../../assets/images/logo/slide3.png";
import slider2 from "../../assets/images/logo/slide1.png";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className=''>
    <Swiper
    modules={[Autoplay,Pagination, Navigation,  EffectFade]}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{delay: 4000,disableOnInteraction: false,}}
      // effect="fade"
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className='flex justify-around items-center'>
          <div className=' w-1/2 flex items-center justify-center'>
            <img className='h-[250px] lg:h-[500px]' src={slider2} alt="" />
          </div>
          <div className="font-primary my-5 pl-8 w-1/2">
            <h5 className="text-xl lg:text-7xl font-bold">
            Every Bricks
              <br />
              Holds Love
            </h5>
              <button className="border-2 border-green-500 text-green-500 btn btn-xs lg:btn-lg lg:mt-10 hover:text-gray-500">
              <Link to={'/allProperties'}>All Properties</Link>
              </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-around items-center'>
          <div className=' w-1/2 flex items-center justify-center'>
            <img className='h-[240px] lg:h-[400px]' src={slider1} alt="" />
          </div>
          <div className="font-primary my-5 pl-8 w-1/2">
            <h5 className="text-xl lg:text-7xl font-bold">
             
              Strong Work
              <br />
              Ethics
            </h5>
            <button className="border-2 border-green-500 text-green-500 btn btn-xs lg:btn-lg lg:mt-10 hover:text-gray-500">
              <Link to={'/allProperties'}>All Properties</Link>
              </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};
export default Banner;
