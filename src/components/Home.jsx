'use client';
import Button from '../components/Button'
import Image from 'next/image'
import HeroImg from '../../public/hero.jpeg'
import { Link } from 'react-scroll';

export default function Home() {
  return (
   <div id='/'  className='flex flex-col justify-between items-center py-8 lg:py-[18px] gap-4 mt-[68px] h-[430px] md:h-[700px]  '>

        <h1 className='text-[22px] md:text-[38px]  text-center font-bold md:w-[620px] mt-[100px] text-[#5F45CC]  '>A Global Challenge Research Network </h1>
        <Image src={HeroImg} width={900} height={900}  alt='hero image' className=' absolute top-0 w-full h-[480px] md:h-[800px]  -z-10 brightness-[40%] '  />


      <Link to='about' activeClass='active' offset={50} smooth={true} spy={true} duration={500} className=' md:mb-[70px]' >
          <Button className='flex justify-center text-center self-center items-center md:mb-[px]  ' text='Read More' url='' />
      </Link>
     
      
   </div>
  )
}