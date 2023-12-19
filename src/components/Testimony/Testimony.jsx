/* eslint-disable react/no-unescaped-entities */
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';
// import ReviewCard1 from './Reviewcard1';
// import ReviewCard2 from './ReviewCard2';
// import ReviewCard3 from './ReviewCard3';
// import ReviewCard4 from './ReviewCard4';
import { FaPhoneAlt } from "react-icons/fa";
import agent1 from '../../assets/images/logo/staff1.jpg'
import agent2 from '../../assets/images/logo/staff2.jpg'
import agent3 from '../../assets/images/logo/staff3.jpg'
import agent4 from '../../assets/images/logo/staff4.jpg'

const Testimony = () => {
    return (

<div className='mt-12'>
<h1 className="text-center text-4xl font-bold my-2"> Our Exclusive Agents</h1>
<h1 className="text-green-500 text-xl font-semibold mt-2 text-center"> Expertise Is Here</h1>
<h1 className="text-sm  dark:text-gray-200 text-center my-4"> Verdera is committed to providing unparalleled service in the real estate industry. <br/> Whether you're searching for a cozy apartment, a family-friendly house.</h1>

{/* <Swiper
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
</Swiper> */}



<div className="flex flex-col lg:flex-row w-11/12 mx-auto mt-12 ">
  {/* left div for agnets */}
<div className="w-1/2 flex flex-col  items-center  space-y-6">
  {/* agent-1 */}
<div className="flex items-center gap-x-2">
        <img className="object-cover w-32 h-32 rounded-full" src={agent1} alt=""/>
        
        <div className='space-y-3'>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Alex Roy</h1>

            <p className="text-base text-gray-500 dark:text-gray-400">Verdera@gmail.com</p>
            <div className='flex items-center gap-2 border-2  p-2 rounded border-green-500'><FaPhoneAlt className='text-green-500'/> <p> Call : 9635872558</p></div>
        </div>
        </div>
        {/* agent-2 */}
        <div className="flex items-center gap-x-2">
        <img className="object-cover w-32 h-32 rounded-full" src={agent2} alt=""/>
        
        <div className='space-y-3'>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Alex Roy</h1>

            <p className="text-base text-gray-500 dark:text-gray-400">Verdera@gmail.com</p>
            <div className='flex items-center gap-2 border-2  p-2 rounded border-green-500'><FaPhoneAlt className='text-green-500'/> <p> Call : 9635872558</p></div>
        </div>
    </div>
    
</div>
{/* right div for agnets */}
<div className="w-1/2 flex flex-col items-center space-y-6">
  {/* agent-3 */}
<div className="flex items-center gap-x-2">
        <img className="object-cover w-32 h-32 rounded-full" src={agent3} alt=""/>
        
        <div className='space-y-3'>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Samuel Jhonson</h1>

            <p className="text-base text-gray-500 dark:text-gray-400">Verdera@gmail.com</p>
            <div className='flex items-center gap-2 border-2  p-2 rounded border-green-500'><FaPhoneAlt className='text-green-500'/> <p> Call : 9635872558</p></div>
        </div>
        </div>
        {/* agent-3 */}
        <div className="flex items-center gap-x-2">
        <img className="object-cover w-32 h-32 rounded-full" src={agent4} alt=""/>
        
        <div className='space-y-3'>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Carry Halt</h1>

            <p className="text-base text-gray-500 dark:text-gray-400">Verdera@gmail.com</p>
            <div className='flex items-center gap-2 border-2  p-2 rounded border-green-500'><FaPhoneAlt className='text-green-500'/> <p> Call : 9635872558</p></div>
        </div>
    </div>
    
</div>

</div>
</div>
    );
};
export default Testimony;




