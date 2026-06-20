import React from 'react'
import CasementWindowsHero from "./CasementWindowsHero"
import CasementWindowsRodCollection from './CasementWindowsRodCollection'
import CasementWindowsShow from './CasementWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const CasementWindowsHome = () => {
  return (
    <div>
      <CasementWindowsHero />
      <CasementWindowsRodCollection />
      <CasementWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default CasementWindowsHome
