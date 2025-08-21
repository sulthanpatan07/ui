import React from 'react'
import Homenavbar from "../components/HomepageComponents/homenavbar"
import Hero from '../components/HomepageComponents/Hero'
import Features from "../components/HomepageComponents/Features"
import FeaturedSkills from "../components/HomepageComponents/Featuredskills"
import Testimonials from '../components/HomepageComponents/Testinomials'
import CallToAction from '../components/HomepageComponents/CalltoAction'
import HomeFooter from '../components/HomepageComponents/HomeFooter'

function homepage() {
  return (
    <div>
        <Homenavbar/>
        <Hero/>
        <Features/>
        <FeaturedSkills/>
        <Testimonials/>
        <CallToAction/>
        <HomeFooter/>
    </div>
  )
}

export default homepage