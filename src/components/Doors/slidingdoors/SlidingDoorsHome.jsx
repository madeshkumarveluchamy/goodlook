import React from 'react'
import SlidingDoorsHero from "./SlidingDoorsHero"
import SlidingRodCollection from './SlidingRodCollection'
import SlidingShow from './SlidingShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const SlidingDoorsHome = () => {
  return (
    <div>

      <SlidingRodCollection />
      <SlidingShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default SlidingDoorsHome
