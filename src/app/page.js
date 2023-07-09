import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Team  from '@/components/Team'
import About  from '@/components/About'
import News  from '@/components/News'

export default function Page() {
  return (
   <div className='container'>
      <Navbar />
      <Home />
      <Team />
      <News />
      <About />
      <Footer />
   </div>
  )
}
