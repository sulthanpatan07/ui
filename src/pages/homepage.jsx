import React from 'react'
import Homenavbar from "../components/HomepageComponents/homenavbar"
import Hero from '../components/HomepageComponents/Hero'
import Features from "../components/HomepageComponents/Features"
import FeaturedSkills from "../components/HomepageComponents/Featuredskills"
import AboutSection from "../components/HomepageComponents/Aboutsection"
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