import React from 'react'
import FrenchSlidingDoorsHero from "./FrenchSlidingDoorsHero"
import FrenchSlidingRodCollection from './FrenchSlidingRodCollection'
import FrenchSlidingShow from './FrenchSlidingShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const FrenchSlidingDoorsHome = () => {
  return (
    <div>
      <FrenchSlidingDoorsHero />
      <FrenchSlidingRodCollection />
      <FrenchSlidingShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default FrenchSlidingDoorsHome
