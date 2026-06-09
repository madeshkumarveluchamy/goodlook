import React from 'react'
import LeftHero from "./LeftHero.jsx"
import OpenableDetails from './OpenableDetails'
import WhyOpenable from './WhyOpenable'
import ExperienceAura from './ExperienceAura'

const LeftSlideHome = () => {
  return (
    <div>
      <LeftHero/>
      <OpenableDetails />
      <WhyOpenable />
      <ExperienceAura />
    </div>
  )
}

export default LeftSlideHome
