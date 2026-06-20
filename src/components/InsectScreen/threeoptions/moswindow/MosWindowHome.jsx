import React from 'react'
import MosWindowHero from './MosWindowHero'
import MosquitoWindowGallery from './MosquitoWindowGallery'
import FaqSection from '../../../Story/FaqSection'
import ExperienceAura from '../../../Doors/OpenableDoors/ExperienceAura'

const MosWindowHome = () => {
  return (
    <div>
      <MosWindowHero />
      <MosquitoWindowGallery />
      <FaqSection />
      <ExperienceAura />
    </div>
  )
}

export default MosWindowHome
