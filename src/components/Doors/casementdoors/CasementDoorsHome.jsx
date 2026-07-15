import React from 'react'
import CasementDoorsHero from "./CasementDoorsHero"
import CasementRodCollection from './CasementRodCollection'
import CasementShow from './CasementShow'
import Features from './Features'
import CTASection from '../../Main/CTASection'

const CasementDoorsHome = () => {
  return (
    <div>

      <CasementRodCollection />
      <CasementShow />
      <Features />
      <CTASection />
    </div>
  )
}

export default CasementDoorsHome
