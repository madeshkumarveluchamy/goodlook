import React from 'react'
import CombinationWindowsHero from "./CombinationWindowsHero"
import CombinationWindowsRodCollection from './CombinationWindowsRodCollection'
import CombinationWindowsShow from './CombinationWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const CombinationWindowsHome = () => {
  return (
    <div>
      <CombinationWindowsHero />
      <CombinationWindowsRodCollection />
      <CombinationWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default CombinationWindowsHome
