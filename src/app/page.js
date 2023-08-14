import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Team  from '@/components/Team'
import About  from '@/components/About'
import News  from '@/components/News'
import Project from '@/components/project'

export default function Page() {
  return (
   <div >
     
      <Home />
      <News />
      <About />
      <Project/>
      <Team />
      <Footer />
   </div>
  )
}
