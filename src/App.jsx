import React from 'react'
import Hero from './components/Main/Hero'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Story from './components/Main/Story'
import Counter from './components/Main/counter'
import Features from './components/Main/Features'
import Collections from './components/Main/Collection'
import QualityDurability from './components/Main/QualityDurability'
import UncompromisingQuality from './components/Main/UncompromisingQuality'
import Testimonials from './components/Main/Testimonials'
import CTASection from './components/Main/CTASection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Counter />
      <Features />
      <Collections />
      <QualityDurability />
      <UncompromisingQuality/>
      <Testimonials/>
      <CTASection/>
      <Footer />
    </div>
  )
}

export default App
