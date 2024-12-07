import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSectiom'
import Services from '../components/Services'
import DoctorsSlider from '../components/DoctorsSlider'
import Reviews from '../components/Reviews'

import About from '../components/About'
import Hero from '../components/Hero'
import FertilityOptions from '../components/FertilityOptions'
import OptionalExtras from '../components/OptionalExtras'
import GivingYouNewLife from '../components/GivingYouNewLife'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <DoctorsSlider/>
     <FertilityOptions/>
     <Services/>
      <HeroSection/>
<OptionalExtras/>
<GivingYouNewLife/>
     
      
    
    <Reviews/>
    <Footer/>
    </div>
  )
}

export default Home