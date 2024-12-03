import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSectiom'
import Services from '../components/Services'
import DoctorsSlider from '../components/DoctorsSlider'
import Reviews from '../components/Reviews'

import About from '../components/About'
import Hero from '../components/Hero'
import FertilityOptions from '../components/FertilityOptions'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <DoctorsSlider/>
     <FertilityOptions/>
      <HeroSection/>

      <Services/>
      
    
    <Reviews/>
    </div>
  )
}

export default Home