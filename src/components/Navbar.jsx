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
        title: "News",
        link:"news"
    },
   
    {
        id: 3,
        title: "About Us",
        link:"about"
    },
    {
        id: 4,
        title: "Our Team",
        link:"meet"
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

     
      
        useEffect(() => {
          // Only add the scroll event listener when the component is mounted on the client-side
          // It will be executed after the initial render on the client-side
          window.addEventListener("scroll", changeScroll);
      
          // Clean up the event listener when the component is unmounted
          return () => {
            window.removeEventListener("scroll", changeScroll);
          };
        }, []);








     

  return (
        
        <nav className={` ${color ? 'bg-[#6045ccb8] text-white' :'bg-none' }  text-white  h-[100px] md:h-[120px] fixed left-0 px-[15px] md:px-[30px] top-0 w-full flex  justify-between items-center `}>
        <div className='flex flex-col'>
            <Link href="/" >
                <Image src={Logo} width={500} height={500} alt="logo" className='w-[130px] h-[120px] md:w-[180px] md:h-[180px] p-[8px]'/>
                <h1 className='font-bold text-[15px] md:text-[18px] mt-[-30px]'>TELEREHABILITATION</h1>
            </Link>
        </div>
        
            <FaBars  onClick={toggleNav} className={ ` ${open ? '':''} md:hidden h-[30px] w-[40px] cursor-pointer`}/>
        
            <div className={` hidden md:flex md:items-center md:gap-[20px] `}>
                { Links.map((item)=>(
                    <Link key={item.id} to={item.link} activeClass='active' offset={50} smooth={true} spy={true} duration={500}  className={`${item.id ===item.link ? "border-[#5F45CC] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row  items-center cursor-pointer justify-center`} >{item.title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white hahahahahahahaha rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        

            <div className={` absolute right-[35px] top-[85px]  md:hidden  flex flex-col items-center text-white gap-[20px] bg-[#6045ccd7] w-[200px] rounded-[10px] `}>
                { open&& Links.map((item)=>(
                    <Link key={item.id} to={item.link} activeClass='active' offset={50} smooth={true} spy={true} duration={500} onClick={()=>setOpen(!open)} className={`${item.id ===item.link ? "border-[#5F45CC] border-b-4" : ""  }  w-[90px] h-[35px] p-1 flex flex-col md:flex-row cursor-pointer  items-center justify-center`} >{item.title}</Link>
                ))}
                
                {/* <button className='p-[5px] border-none bg-[#5F45CC] text-white rounded-[3px] w-[70px]'>Login</button> */}
            </div>
        
                
    </nav>
  )
}
export default Navbar