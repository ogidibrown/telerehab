'use client'
import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Button from './Button'
import dynamic from 'next/dynamic';


const DynamicNavbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Carousel  ({children:Slides, autoSlide = false, autoSlideInterval= 2000}) {

    const [curr, setCur] = useState(0)

    const prev = ()=>{
        setCur((curr) => (curr === 0 ? Slides.length -1 : curr - 1))
    }
    const next = ()=>{
        setCur((curr) => (curr === Slides.length -1 ? 0 : curr + 1))
    }

    useEffect(()=>{
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
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
                     <h1 className='text-[25px] md:text-[55px] font-semibold text-[#fff] text-center   md:leading-[60px]  uppercase'>
                         A Global Challenge Research Network 
                     </h1>
                     <Link to='about' activeClass='active' offset={50} smooth={true} spy={true} duration={500} className=' flex self-center mt-[30px] md:mt-[100px]' >
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