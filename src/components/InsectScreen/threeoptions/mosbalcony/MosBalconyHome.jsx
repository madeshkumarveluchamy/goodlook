import React from 'react'
import MosBalconyHero from './MosBalconyHero'
import MosquitoBalconyGallery from './MosquitoBalconyGallery'
import FaqSection from '../../../Story/FaqSection'
import ExperienceAura from '../../../Doors/OpenableDoors/ExperienceAura'

const MosBalconyHome = () => {
  return (
    <div>
      <MosBalconyHero />
      <MosquitoBalconyGallery />
      <FaqSection />
      <ExperienceAura />
    </div>
  )
}

export default MosBalconyHome
