import React from 'react'
import TiltTurnDoorsHero from "./TiltTurnDoorsHero"
import TiltTurnRodCollection from './TiltTurnRodCollection'
import TiltTurnShow from './TiltTurnShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const TiltTurnDoorsHome = () => {
  return (
    <div>
      <TiltTurnDoorsHero />
      <TiltTurnRodCollection />
      <TiltTurnShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default TiltTurnDoorsHome
