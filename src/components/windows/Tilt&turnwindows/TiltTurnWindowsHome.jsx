import React from 'react'
import TiltTurnWindowsHero from "./TiltTurnWindowsHero"
import TiltTurnWindowsRodCollection from './TiltTurnWindowsRodCollection'
import TiltTurnWindowsShow from './TiltTurnWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const TiltTurnWindowsHome = () => {
  return (
    <div>
      <TiltTurnWindowsHero />
      <TiltTurnWindowsRodCollection />
      <TiltTurnWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default TiltTurnWindowsHome
