import React from 'react'
import SlidingDoorsHero from "./SlidingDoorsHero"
import SlidingRodCollection from './SlidingRodCollection'
import SlidingShow from './SlidingShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const SlidingDoorsHome = () => {
  return (
    <div>
      <SlidingDoorsHero />
      <SlidingRodCollection />
      <SlidingShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default SlidingDoorsHome
