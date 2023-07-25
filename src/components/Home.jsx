import Button from '../components/Button'
import Image from 'next/image'
import HeroImg from '../../public/hero.jpeg'

export default function Home() {
  return (
   <div id='/'  className='flex flex-col justify-between items-center py-8 lg:py-[18px] gap-4 mt-[68px] h-[430px] md:h-[600px]  '>
        <h1 className='text-[22px] md:text-[42px] mt-[60px] md:mt-[90px] text-white  text-center font-bold '>Welcome to <span className='text-[#5F45CC]'>TELEREHABILITATION</span></h1>

        <Image src={HeroImg} width={1000} height={1000}  alt='hero image' className=' object-fill absolute top-0 w-full h-[480px] md:h-[680px]  -z-10 brightness-[40%] '  />

        <span className='text-[20px] md:text-[30px]  text-center font-semibold md:w-[620px] text-white   '>Telerehabilitation for people with neurological conditions in Ghana - A Global Challenge Research Network </span>





        <Button className='flex justify-center text-center self-center items-center md:mt-[30px]  ' text='Read More' url='/about' />
     
      
   </div>
  )
}