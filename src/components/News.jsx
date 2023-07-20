'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import Image from 'next/image'
import Slide1 from '../../public/slide1.jpeg'
import Slide2 from '../../public/slide2.jpeg'
import Slide3 from '../../public/slide3.jpeg'
import Slide4 from '../../public/slide4.jpeg'




const News = () => {


    return (
      <div id ='news' className='flex flex-col my-[20px] gap-4 '>
          <div>
              <h1 className=' text-[30px] md:text-[40px] font-bold text-center flex justify-center items-center mt-4'>News</h1>
          </div>
          <div className='flex items-center justify-evenly'>
          <Swiper className='flex justify-evenly items-center'
                   style={{
                    "--swiper-navigation-color":"black",
                    "--swiper-navigation-size":"3.3rem"
                }}
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                   
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    
                  },
                  768: {
                    slidesPerView: 3,
                    
                  },
                  1024: {
                    slidesPerView: 3,
                    
                  },
                }}
                autoplay={{
                    delay:2000,
                    disableOnInteraction:false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                >
                  <SwiperSlide>
                    <Image src={Slide1} width={400} height={400}  alt='slide image' className='rounded-[5px] h-full w-full md:w-[400px] md:h-[300px]'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={Slide2} width={400} height={400}  alt='slide image' className='rounded-[5px] h-full w-full md:w-[400px] md:h-[300px]'  />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <Image src={Slide3} width={400} height={400}  alt='slide image' className='rounded-[5px] h-full w-full md:w-[400px] md:h-[300px]'  />
                    <h1 className='text-[15px] md:text-[18px] font-bold my-2' >Focus group meeting held in September, 2022</h1>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={Slide4} width={400} height={400}  alt='slide image' className='rounded-[5px] h-full w-full md:w-[400px] md:h-[300px]'  />
                    <h1 className='text-[15px] md:text-[18px] font-bold my-2'>Focus group meeting held in September, 2022</h1>
                  </SwiperSlide>
               
                               
        </Swiper>
          </div>
          
          
      </div>
    )
  }
  
  export default News