import React from 'react'
import UpvcHero from './UpvcHero'
import UpvcAesthetics from "./UpvcAesthetics"
import UpvcFeatures from './UpvcFeatures'
import UpvcDoorsGallery from './UpvcDoorGallery'
import BaydeeProfiles from './BaydeeProfiles'

const UpvcHome = () => {
  return (
    <div>
      {/* <UpvcHero /> */}
      <UpvcAesthetics />
      <BaydeeProfiles />
      <UpvcDoorsGallery/>
      <UpvcFeatures />
    </div>
  )
}

export default UpvcHome
