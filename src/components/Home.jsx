'use client'
import Image from 'next/image'
import Carousel from '../components/Carousel'




const Slides = [
  {
    id: 1,
    img: "/hero1.jpg"
  },
     {
    id: 2,
    img: "/hero2.jpg"
  },
      {
    id: 3,
    img: "/hero3.jpg"
  },
       {
    id: 4,
    img: "/hero4.jpg"
  },
        {
    id: 5,
    img: "/hero5.jpeg"
  },
  //       {
  //   id: 6,
  //   img: "/hero6.jpeg"
  // },
        
]




const Home = () => {

   
  
  return (
    <div id ='home' className="" >
        <Carousel autoSlide={true} autoSlideInterval={4000} >
        {Slides.map((item, index) => (
              <div key={index}  className=' h-[400px] md:min-h-screen md:min-w-full brightness-50  w-full'>
                <Image src={item.img}  width={900} height={900} alt="hero images" className=' h-[400px] md:min-h-screen md:min-w-full w-full ' />
              </div>
            ))}
            
        </Carousel>
    </div>
  )
}

export default Home