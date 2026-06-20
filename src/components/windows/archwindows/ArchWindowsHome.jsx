import React from 'react'
import ArchWindowsHero from "./ArchWindowsHero"
import ArchWindowsRodCollection from './ArchWindowsRodCollection'
import ArchWindowsShow from './ArchWindowsShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const ArchWindowsHome = () => {
  return (
    <div>
      <ArchWindowHero />
      <ArchWindowRodCollection />
      <ArchWindowShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default ArchWindowsHome
