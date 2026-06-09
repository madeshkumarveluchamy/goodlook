import React from 'react'
import Hero from "./Hero"
import InsectProtection from './InsectProtection'
import InsectCollections from './InsectCollections'
import InsectFeatures from './InsectFeatures'
import PreferredChoiceHeader from './PreferredChoiceHeader'

const InsectHome = () => {
  return (
    <div>
      <Hero />
      <InsectProtection />
      <InsectCollections />
       <PreferredChoiceHeader />
      <InsectFeatures />
   
    </div>
  )
}

export default InsectHome
