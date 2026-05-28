import React from 'react'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import WeddingStories from './components/WeddingStories'
import ExperienceSection from './components/ExperienceSection'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <div>
      <Hero/>
      <TrustSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <WeddingStories/>
      <ExperienceSection/>
      <Testimonials/>
    </div>
  )
}

export default page