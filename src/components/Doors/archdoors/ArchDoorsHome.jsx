import React from 'react'
import ArchDoorsHero from "./ArchDoorsHero"
import ArchRodCollection from './ArchRodCollection'
import ArchShow from './ArchShow'
import Features from '../../Main/Features'
import CTASection from '../../Main/CTASection'

const ArchDoorsHome = () => {
  return (
    <div>
      <ArchDoorsHero />
      <ArchRodCollection />
      <ArchShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default ArchDoorsHome
