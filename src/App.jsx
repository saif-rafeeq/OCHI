import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='max-w-[1400px] mx-auto min-h-fit bg-[#F1F1F1]'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App