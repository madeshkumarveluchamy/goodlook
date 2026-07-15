import React from 'react'
import ArchDoorsHero from "./ArchDoorsHero"
import ArchRodCollection from './ArchRodCollection'
import ArchShow from './ArchShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const ArchDoorsHome = () => {
  return (
    <div>
     
      <ArchRodCollection />
      <ArchShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default ArchDoorsHome
