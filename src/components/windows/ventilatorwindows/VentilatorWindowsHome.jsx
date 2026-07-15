import React from 'react'
import VentilatorWindowsHero from "./VentilatorWindowsHero"
import VentilatorWindowsRodCollection from './VentilatorWindowsRodCollection'
import VentilatorWindowsShow from './VentilatorWindowsShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const VentilatorWindowsHome= () => {
  return (
    <div>

      <VentilatorWindowsRodCollection />
      <VentilatorWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default VentilatorWindowsHome
