import React from 'react'
import SlidingWindowsHero from "./SlidingWindowsHero"
import SlidingWindowsRodCollection from './SlidingWindowsRodCollection'
import SlidingWindowsShow from './SlidingWindowsShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const SlidingWindowsHome = () => {
  return (
    <div>

      <SlidingWindowsRodCollection />
      <SlidingWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default SlidingWindowsHome
