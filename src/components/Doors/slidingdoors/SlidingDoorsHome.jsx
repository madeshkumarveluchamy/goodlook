import React from 'react'
import CasementDoorsHero from "./SlidingDoorsHero"
import CasementRodCollection from './SlidingRodCollection'
import CasementShow from './SlidingShow'
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
