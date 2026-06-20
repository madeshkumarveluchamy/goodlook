import React from 'react'
import VentilatorWindowsHero from "./VentilatorWindowsHero"
import VentilatorWindowsRodCollection from './VentilatorWindowsRodCollection'
import VentilatorWindowsShow from './VentilatorWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const VentilatorWindowsHome= () => {
  return (
    <div>
      <VentilatorWindowsHero />
      <VentilatorWindowsRodCollection />
      <VentilatorWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default VentilatorWindowsHome
