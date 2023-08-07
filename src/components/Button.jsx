'use client'
import Link from 'next/link'


const Button = ({text, url}) => {
  return (
    <Link href={url}>
    <button className=' p-[20px] cursor-pointer text-[#5F45CC] rounded-[50px] border-[#5F45CC] border-4  max-w-max h-[50px] flex items-center'>{text}</button>
    </Link>
  )
}

export default Button