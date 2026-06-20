import React from 'react'
import FrenchDoorsHero from "./FrenchDoorsHero"
import FrenchRodCollection from './FrenchRodCollection'
import FrenchShow from './FrenchShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const FrenchDoorsHome = () => {
  return (
    <div>
      <FrenchDoorsHero />
      <FrenchRodCollection />
      <FrenchShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default FrenchDoorsHome
