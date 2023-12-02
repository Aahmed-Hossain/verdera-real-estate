

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/logo/banner1.jpg';
import img2 from '../../assets/images/logo/banner2.jpg';
import img3 from '../../assets/images/logo/banner3.jpg';
import img4 from '../../assets/images/logo/banner4.jpg';
import img5 from '../../assets/images/logo/banner5.jpg';
import img6 from '../../assets/images/logo/banner6.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust the autoplay speed in milliseconds
  };
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <Slider {...settings} className="carousel h-[28rem]  rounded-xl w-full">
      {images.map((img, index) => (
        <div key={index} className="carousel-item relative rounded-xl w-full">
          <img src={img} className="w-full rounded-xl  h-[26rem]" alt={`Slide ${index + 1}`} />
          <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white rounded-xl ">
            <div className='pl-12 w-1/2'>
              <h1 className='my-6 text-6xl font-bold space-y-16'>Find Your Expected Peace Solution In a Click.</h1>
              <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='my-6 ml-24 cursor-pointer'>
                <Link to={'/allProperties'} className="px-3 py-2 font-bold rounded-md border-2 border-green-400">View All Properties</Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${index === 0 ? images.length : index}`} className="btn text-white btn-circle bg-red-600">❮</a>
            <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle text-white bg-red-600">❯</a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
