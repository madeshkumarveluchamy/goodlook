import React from 'react'
import FrenchSlidingWindowsHero from "./FrenchSlidingWindowsHero"
import FrenchSlidingWindowsRodCollection from './FrenchSlidingWindowsRodCollection'
import FrenchSlidingWindowsShow from './FrenchSlidingWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const FoldableWindowsHome = () => {
  return (
    <div>
      <FrenchSlidingWindowsHero />
      <FrenchSlidingWindowsRodCollection />
      <FrenchSlidingWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default FoldableWindowsHome
