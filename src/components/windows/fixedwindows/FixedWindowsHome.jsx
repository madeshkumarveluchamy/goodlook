import React from 'react'
import FixedWindowsHero from "./FixedWindowsHero"
import FixedWindowsRodCollection from './FixedWindowsRodCollection'
import FixedWindowsShow from './FixedWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const FixedWindowsHome = () => {
  return (
    <div>
      <FixedWindowsHero />
      <FixedWindowsRodCollection />
      <FixedWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default FixedWindowsHome
