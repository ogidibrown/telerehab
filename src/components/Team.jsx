import Image from 'next/image'
import Derrick from '../../public/derrick.png'
import Lorna from '../../public/lorna.png'
import Shadrack from '../../public/shadrack.png'
import Fred from '../../public/fred.png'
import Katie from '../../public/katie.png'
import Eric from '../../public/eric.png'
import Marian from '../../public/marian.png'
import Frederik from '../../public/frederik.png'

const MeetPage = () => {
  return (
    <div id ='meet' className='flex flex-col gap-4 '>
        <div>
            <h1 className=' text-[30px] md:text-[40px] font-bold text-center flex justify-center items-center  mt-4'>Our <span className='text-[#5F45CC] ml-2'>Team</span></h1>
        </div>
        <div className=' grid grid-cols-2  md:grid-cols-4 items-center mb-[35px] gap-3 p-2'>
             <div className='flex flex-col items-center justify-center mt-[15px] text-center md:mb-3  p-2 gap-3'>
                <Image src={Lorna} width={160} height={120} alt='Lorna' className=' ' />

                <h1 className='font-bold text-[15px] md:text-[20px]  '>Prof Lorna Paul</h1>
                <span className='text-[#5F45CC] text-[14px] md:text-[18px]  '>Physiotherapist and Professor of Allied Health Science at Glasgow Caledonian University</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
           
            <div className='flex flex-col items-center justify-center  md:mb-[35px] text-center mt-[25px]  p-2 gap-3'>
                <Image src={Fred} width={150} height={120} alt='Lorna' className=' md:mt-2' />
                <h1 className='font-bold text-[15px] md:text-[20px]  '>Prof. Fred Stephen Sarfo</h1>
                <span className='text-[#5F45CC] text-[14px] md:text-[18px]'>Principal Investigator/Neurologist at Komfo Anokye Teaching Hospital & KNUST</span>
                {/* <p>
                    Empower residents 
                    to maintain their potential and sense of 
                    achievement through provision of aids and equipment.
                </p> */}
            </div>

            <div className='flex flex-col items-center justify-center  text-center mb-[35px] md:mt-[50px]  p-2 gap-3'>
                <Image src={Marian} width={150} height={120} alt='Lorna' className=' ' />
                <h1 className='font-bold text-[15] md:text-[20px]  '>Prof Marian Brady</h1>
                <span className='text-[#5F45CC] text-[14px] md:text-[18px]'>Professor of Stroke Care and Rehabilitation. Speech and Language Therapist (Glasgow Caledonian University)</span>
                
            </div>
            <div className='flex flex-col items-center justify-center text-center  md:mt-[20px]  gap-3  p-2'>
                <Image src={Frederik} width={150} height={120} alt='Lorna' className='  ' />
                <h1 className='font-bold text-[15] md:text-[20px] '>Prof Frederike Van Wijck</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[14px] md:text-[18px]'>Prof of Neurological Rehabilitation and Co-Director of the Research Centre for Health (Glasgow Caledonian University)</span>
                {/* <p className='flex items-center justify-center'>
                undertaking assessments of patients’ physical, 
                communication, interaction and cognitive skills

                </p> */}
            </div>
            
            
              <div className='flex flex-col items-center justify-center md:mt-[20px] mt-[15px] text-center gap-3  p-2'>
                <Image src={Katie} width={150} height={120} alt='Lorna' className='r md:mt-[20px] ' />
                <h1 className='font-bold text-[15] md:text-[20px]'>Dr. Katie Thomson</h1>
                <span className='flex items-center justify-center text-[#5F45CC] text-[14px] md:text-[18px]'>Occupational Therapist & Systematic Reviewer (NESSIE) (Glasgow Caledonian University)</span>
             
            </div>
            <div className='flex flex-col items-center justify-center text-center  md:mt-2  gap-3 p-2'>
                <Image src={Eric} width={150} height={120} alt='Lorna' className=' ' />
                <h1 className='font-bold text-[15] md:text-[20px]'> Eric Opoku</h1>
                <span className='text-[#5F45CC] text-[14px] md:text-[18px]'>Occupational Therapist <br/> (Glasgow Caledonian University)</span>
                
            </div>

            <div className='flex flex-col items-center justify-center text-center mt-[30px] md:mb-[20px]  gap-3 p-2'>
                <Image src={Shadrack} width={150} height={120} alt='Lorna' className=' ' />
                <h1 className='font-bold text-[15] md:text-[20px] '> Shadrack Osei Asibey</h1>
                <span className='text-[#5F45CC] text-[18px]'>Research Coordinator/Assistant (Komfo Anokye Teaching Hospital)</span>
                
            </div>
            <div className='flex flex-col items-center justify-center  text-center mb-[20px] md:mt-[25px]  p-2 gap-3'>
                <Image src={Derrick} width={150} height={120} alt='Lorna' className='' />
                <h1 className='font-bold text-[15] md:text-[20px] '>Derrick Antwi</h1>
                <span className='text-[#5F45CC] text-[14px] md:text-[18px] '>Senior Occupational Therapist (Komfo Anokye Teaching Hospital)</span>
                {/* <p>
                    Empower residents hkjhgkhkkjhkhkjhkjh 
                    to maintain their potential and sense of jjkgjhghjgjhgjh
                    achievement through provision of aids and equipment.
                </p> */}
            </div>
            
        </div>
    </div>
  )
}

export default MeetPage