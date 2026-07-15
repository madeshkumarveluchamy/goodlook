import React from 'react'
import ArchWindowsHero from "./ArchWindowsHero"
import ArchWindowsRodCollection from './ArchWindowsRodCollection'
import ArchWindowsShow from './ArchWindowsShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const ArchWindowsHome = () => {
  return (
    <div>

      <ArchWindowsRodCollection />
      <ArchWindowsShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default ArchWindowsHome
