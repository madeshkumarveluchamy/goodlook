import React from 'react'
import Hero from './Hero'
import Storystory from "./Storystory"
import StoryPhilosophy from './StoryPhilosophy'
import StoryCategories from './StoryCategories'
import FaqSection from './FaqSection'

const StoryHome = () => {
  return (
    <div>
      <Hero/>
      <Storystory/>
      <StoryPhilosophy/>
      <StoryCategories/>
      <FaqSection />
    </div>
  )
}

export default StoryHome
