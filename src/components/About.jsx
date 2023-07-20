import Image from 'next/image'
import VideoPlayer from './VideoPlayer'


const About = () => {
  return (
    <div id ='about' className='  gap-4 '>
      <div className='flex flex-col items-center md:flex-row'>

          <div className='flex flex-col items-center gap-2 p-[10px] flex-1'>
              <h1 className=' text-[30px] md:text-[40px] font-bold text-center flex justify-center items-center my-4'>About <span className='text-[#5F45CC] ml-2'>Us</span></h1>
              <span className='p-2'> 
              Telerehabilitation for people with neurological 
              conditions in Ghana  - A Global Challenges Research 
              Network
              <br />
              <br/>

              The number of people in Sub-Saharan Africa, including 
              Ghana, with neurological conditions such as stroke, 
              Parkinson’s disease and spinal cord injury is increasing. 
              Rehabilitation is critical for people with neurological 
              conditions to ensure good health outcomes and quality of life. 
              However, people with neurological conditions in Ghana, 
              and other similar countries, are often unable to access 
              rehabilitation services due to the lack of rehabilitation staff, 
              high costs of services and/or because they live in rural 
              areas a distance from the specialist centres.
              <br />
              <br/>

              The improvement in telecommunication networks and 
              the rising number of people in Ghana with 
              mobile phones (about 75%) and smart phones 
              (about 35%) suggests that telerehabilitation 
              (the remote delivery of rehabilitation services) has 
              the potential to be a low cost solution, and 
              beneficial for people with neurological conditions, 
              although the evidence is limited especially in lower 
              income countries.

              </span>
          </div>

          <div className='flex flex-col p-1 md:mt-[140px] flex-1'>
          <VideoPlayer  />
          </div>
      </div>
      <div className='flex flex-col items-center'>
          <h1 className=' text-[30px] md:text-[40px] font-bold text-center flex justify-center items-center my-4'>Vision</h1>
          <div className=' flex '>
            <div className='flex items-center flex-col p-2 flex-1'>

              <span className=''>
              1)   To provide a forum for researchers spanning health care, policy and practice, information technology together with service users/carers and other key stakeholders to develop research priorities for telerehabilitation for people with neurological conditions in Ghana
              <br />
              <br />
              2)   To develop and undertake a programme of sustainable, innovative, interdisciplinary research based on the identified research priorities to improve the welfare of people with neurological conditions in Ghana and their carers
              <br />
              <br />
           
              </span>
            </div>
            <div className='flex flex-col items-center p-2 flex-1'>
              
              <span>
              3)   To improve the research capacity and capability of rehabilitation staff in Ghana
              <br />
              <br />
              4)   To support the implementation of an evidence based, scalable and sustainable telerehabilitation service for people with neurological conditions in Ghana.
              <br />
              <br />
              5)   To explore the generalisability of the findings in Ghana to other SSA countries.
              </span>
            </div>
          </div>

      </div>
       
        
    </div>
  )
}

export default About