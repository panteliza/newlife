import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSectiom'
import Services from '../components/Services'
import DoctorsSlider from '../components/DoctorsSlider'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <DoctorsSlider/>
    </div>
  )
}

export default Home