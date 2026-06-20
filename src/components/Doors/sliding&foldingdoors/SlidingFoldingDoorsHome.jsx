import React from 'react'
import SlidingFoldingDoorsHero from "./SlidingFoldingDoorsHero"
import SlidingFoldingRodCollection from './SlidingFoldingRodCollection'
import SlidingFoldingShow from './SlidingFoldingShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const SlidingFoldingDoorsHome = () => {
  return (
    <div>
      <SlidingFoldingDoorsHero />
      <SlidingFoldingRodCollection />
      <SlidingFoldingShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default SlidingFoldingDoorsHome
