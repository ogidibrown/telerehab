'use client'
import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Button from './Button'
import dynamic from 'next/dynamic';


const DynamicNavbar = dynamic(() => import('../components/Navbar'), { ssr: false });


export default function Carousel({ children: Slides, infinite = true, autoSlide = false, autoSlideInterval = 10000, }) {
    
    
    const [curr, setCur] = useState(0)

    const prev = ()=>{
        setCur((curr) => (curr === 0 ? Slides.length -1 : curr - 1))
    }
    const next = ()=>{
        setCur((curr) => (curr === Slides.length -1 ? 0 : curr + 1))
    }

    useEffect(()=>{
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval, infinite )
        return ()=> clearInterval(slideInterval)
        
    },[])


  return (
    <div className=' w-full bg-cover overflow-hidden relative'>
        <div className=' flex transition-transform bg-cover bg-center ease-out duration-500' style={{transform:`translateX(-${curr*100}%)`}}>{Slides}</div>
          <div className='absolute  inset-0 flex items-center justify-between md:mb-10 text-white'>
              <DynamicNavbar />
            <button onClick={prev} className='bg-black flex items-center rounded-full shadow mb-5 ml-3 cursor-pointer '>
              <BsChevronLeft size={35} className='p-2'/>
            </button>
            <div className='flex flex-col items-center md:min-h-screen md:mt-[110px] mt-[100px] gap-10 md:gap-2 justify-evenly'>
                <div className=' flex flex-col  items-center md:items-start gap-[50px]'>
                     <h1 className='text-[16px] md:text-[50px] md:mt-[80px] pt-[50px] font-bold text-[#fff] text-center   md:leading-[60px]  uppercase'>
                        Telerehabilitation for People with <br /><span className='text-[14px] md:text-[45px]'> Neurological conditions in Ghana</span> <br /><span className=' text-[15px] md:text-[47px] italic bg-gradient-to-r from-[#5F45CC] via-[#a28fcf] to-blue-600 bg-clip-text text-transparent '> -A Global Challenge Research Network </span>
                     </h1>
                     <Link to='about' activeClass='active' offset={50} smooth={true} spy={true} duration={500} className=' flex self-center  md:mt-[60px]' >
                         <Button className='flex justify-center text-center self-center text-[#fff] items-center md:mb-[px]  ' text='Read More' url='' />
                     </Link>
                </div>
            </div>
            <button onClick={next} className='bg-black flex items-center rounded-full shadow mb-5 mr-3 cursor-pointer '>
              <BsChevronRight size={35} className='p-2' />
            </button>
            
        </div>
    </div>
  )
}