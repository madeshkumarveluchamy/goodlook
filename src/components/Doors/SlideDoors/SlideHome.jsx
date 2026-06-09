import React from 'react'
import SlideHero from './SlideHero'
import OpenableDetails from './OpenableDetails'
import WhyOpenable from './WhyOpenable'
import ExperienceAura from './ExperienceAura'

const SlideHome = () => {
  return (
    <div>
      <SlideHero/>
       <OpenableDetails />
      <WhyOpenable />
      <ExperienceAura />
    </div>
  )
}

export default SlideHome
