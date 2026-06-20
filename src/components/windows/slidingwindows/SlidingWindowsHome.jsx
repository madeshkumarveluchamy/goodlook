import React from 'react'
import SlidingWindowsHero from "./SlidingWindowsHero"
import SlidingWindowsRodCollection from './SlidingWindowsRodCollection'
import SlidingWindowsShow from './SlidingWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const SlidingWindowsHome = () => {
  return (
    <div>
      <SlidingWindowsHero />
      <SlidingWindowsRodCollection />
      <SlidingWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default SlidingWindowsHome
