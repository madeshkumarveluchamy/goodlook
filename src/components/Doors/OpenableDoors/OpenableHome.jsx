import React from 'react'
import Hero from './Hero'
import OpenableDetails from './OpenableDetails'
import WhyOpenable from './WhyOpenable'
import ExperienceAura from './ExperienceAura'

const OpenableHome = () => {
  return (
    <div>
      <Hero/>
      <OpenableDetails />
      <WhyOpenable />
      <ExperienceAura />
    </div>
  )
}

export default OpenableHome
