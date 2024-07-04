import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import '../styles/Slider.css';
// Additional Swiper modules if needed
import { Autoplay } from 'swiper/modules';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const MySwiperComponent = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 const handleSlideChange = (swiper) => {
  setActiveIndex(swiper.activeIndex);
 };

 return (

  <Swiper
   breakpoints={{
    640: {
     slidesPerView: 1
    },
    768: {
     slidesPerView: 2
    },
    1024: {
     slidesPerView: 3
    }
   }}
   modules={[Autoplay]}
   autoplay={{
    delay: 1500,
    disableOnInteraction: false,
   }}
   loop={true}

   
   spaceBetween={20}
   pagination={{ clickable: true }}
   onSlideChange={handleSlideChange}
  >
   <div className='flex justify-center right-0'>
    <SlideNextButton />
   </div>

   {[FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaReact, SiNextdotjs, FaNodeJs, SiExpress, SiMongodb, SiMongoose].map((Icon, index) => (
    <div key={index}  >

     <SwiperSlide className="slide rounded-full " >
      <Icon size={100} className='icon' />
     </SwiperSlide>
    </div>
   ))}

  </Swiper>
 );
}

export default MySwiperComponent;


const SlideNextButton = () => {
 const swiper = useSwiper();
 return (
  <div className="flex gap-4 m-3 ">
   <button onClick={() => swiper.slidePrev()} className="btn btn-active btn-neutral hover:scale-[1.1] ">
    &lt;
   </button>
   <button onClick={() => swiper.slideNext()} className="btn btn-active btn-neutral hover:scale-[1.1]">
    &gt;
   </button>
  </div>
 );
};
