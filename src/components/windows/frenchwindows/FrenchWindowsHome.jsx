import React from 'react'
import FrenchWindowsHero from "./FrenchWindowsHero"
import FrenchWindowsRodCollection from './FrenchWindowsRodCollection'
import FrenchWindowsShow from './FrenchWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const FrenchWindowsHome = () => {
  return (
    <div>
      <FrenchWindowsHero />
      <FrenchWindowsRodCollection />
      <FrenchWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default FrenchWindowsHome
