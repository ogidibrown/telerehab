"use client";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image';
import Logo from '../../public/logo.png'
import { usePathname } from 'next/navigation';
import {FaBars} from 'react-icons/fa';






const Links =[
    {
        id: 1,
        title: "Home",
        link:"/"
    },
    {
        id: 2,
        title: "Our Team",
        link:"meet"
    },
    {
        id: 3,
        title: "News",
        link:"news"
    },
   
    {
        id: 4,
        title: "About Us",
        link:"about"
    },
   
];


const Navbar = () => {
const pathname = usePathname()

//close mobile nav view
const [open, setOpen]= useState(false);

//change nav color when scrolling
const [color, setColor]= useState(false);

//close mobile nav view fn
const toggleNav = ()=>{
    setOpen(!open)
}


//change nav color when scrolling fn
    const changeScroll = () => {
        if (window.scrollY >= 100 ) {
         setColor(true)
        } else {
         setColor(false)
        }
     }
   

     window.addEventListener("scroll", changeScroll )










     

  return (
        
        <nav className={` ${color ? 'bg-[#6045ccb8] text-white' :'bg-none' }    h-[100px] fixed left-0 px-[15px] md:px-[30px] top-0 w-full flex  justify-between items-center `}>
        <Link href="/" >
            <Image src={Logo} width={200} height={150} alt="logo" className='w-[150px] h-[100px] md:w-[200px] md:h-[150px]'/>
        </Link>
        
            <FaBars  onClick={toggleNav} className={ ` ${open ? '':''} md:hidden h-[30px] w-[40px] cursor-pointer`}/>
        
            <div className={` hidden md:flex md:items-center md:gap-[20px] `}>
                { Links.map(({link, title, id})=>(
                    <Link to={link} activeClass='active' offset={50} smooth={true} spy={true} duration={500}  className={`${pathname===link ? "border-[#5F45CC] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row  items-center cursor-pointer justify-center`} >{title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white hahahahahahahaha rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        

            <div className={` absolute right-[35px] top-[85px]  md:hidden  flex flex-col items-center text-white gap-[20px] bg-[#6045ccd7] w-[200px] rounded-[10px] `}>
                { open&& Links.map(({link, title, id})=>(
                    <Link to={link} activeClass='active' offset={50} smooth={true} spy={true} duration={500} onClick={()=>setOpen(!open)} className={`${pathname===link ? "border-[#111] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row cursor-pointer  items-center justify-center`} >{title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        
                
    </nav>
  )
}
export default Navbar