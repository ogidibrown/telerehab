import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Team  from '@/components/Team'
import About  from '@/components/About'
import News  from '@/components/News'
import dynamic from 'next/dynamic';


const DynamicNavbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Page() {
  return (
   <div className='container'>
      <DynamicNavbar />
      <Home />
      <News />
      <About />
      <Team />
      <Footer />
   </div>
  )
}
