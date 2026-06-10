import React from 'react'
import Hero from "./Hero"
import InsectProtection from './InsectProtection'
import InsectCollections from './InsectCollections'
import InsectFeatures from './InsectFeatures'
import PreferredChoiceHeader from './PreferredChoiceHeader'

const InsectHome = () => {
  return (
    <div>
      <InsectCollections />
      <InsectProtection />
      <PreferredChoiceHeader />
      <InsectFeatures />
   
    </div>
  )
}

export default InsectHome
