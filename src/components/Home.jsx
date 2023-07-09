import Button from '../components/Button'
import Image from 'next/image'
import HeroImg from 'public/hero.png'

export default function Home() {
  return (
   <div id='/'  className='flex flex-col section items-center py-8 lg:py-[18px] gap-4 mt-[68px]  '>
        <h1 className='text-[18px] md:text-[38px] mt-[60px]  text-center font-bold '>Welcome to <span className='text-[#5F45CC]'>TELEREHABILITATION</span></h1>

        <Image src={HeroImg} width={360} height={180} alt='hero image' className='object-cover w-[360px] h-[180px] md:h-[300px] md:w-[450px]'  />

        <Button className='flex justify-center text-center self-center items-center ' text='Read More' url='/about' />
     
        <span className='text-[18px] md:text-[25px]  text-center font-semibold md:w-[620px] '>Telerehabilitation for people with neurological conditions in Ghana - A Global Challenge Research Network </span>
      
   </div>
  )
}