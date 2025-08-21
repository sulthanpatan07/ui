import React from 'react'
import Homenavbar from "../components/homenavbar"
import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturedSkills from '../components/Featuredskills'
import AboutSection from '../components/Aboutsection'
function homepage() {
  return (
    <div>
        <Homenavbar/>
        <Hero/>
        <Features/>
        <FeaturedSkills/>
        <AboutSection/>
    </div>
  )
}

export default homepage