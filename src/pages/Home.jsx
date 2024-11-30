import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSectiom'
import Services from '../components/Services'
import DoctorsSlider from '../components/DoctorsSlider'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <DoctorsSlider/>
    <Reviews/>
    </div>
  )
}

export default Home