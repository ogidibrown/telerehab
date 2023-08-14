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
        {
    id: 6,
    img: "/hero1.jpg"
  },
     {
    id: 7,
    img: "/hero2.jpg"
  },
      {
    id: 8,
    img: "/hero3.jpg"
  },
       {
    id: 9,
    img: "/hero4.jpg"
  },
        {
    id: 10,
    img: "/hero5.jpeg"
  },
        {
    id: 11,
    img: "/hero1.jpg"
  },
     {
    id: 12,
    img: "/hero2.jpg"
  },
      {
    id: 13,
    img: "/hero3.jpg"
  },
       {
    id: 14,
    img: "/hero4.jpg"
  },
        {
    id: 15,
    img: "/hero5.jpeg"
  },
        {
    id: 16,
    img: "/hero1.jpg"
  },
     {
    id: 17,
    img: "/hero2.jpg"
  },
      {
    id: 18,
    img: "/hero3.jpg"
  },
       {
    id: 19,
    img: "/hero4.jpg"
  },
        {
    id: 20,
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
        <Carousel autoSlide={true} autoSlideInterval={10000} >
        {Slides.map((item, index) => (
              <div key={index}  className=' h-[400px] md:min-h-screen md:min-w-full brightness-50  min-w-full'>
                <Image src={item.img}  width={900} height={900} alt="hero images" className=' h-[400px] md:min-h-screen md:min-w-full w-full ' />
              </div>
            ))}
            
        </Carousel>
    </div>
  )
}

export default Home