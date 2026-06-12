import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Home from './components/Main/Home'
import StoryHome from './components/Story/StoryHome';
import UpvcHome from './components/upvc/UpvcHome';
import ScrollToTop from './components/ScrollToTop';
import OpenableHome from './components/Doors/OpenableDoors/OpenableHome';
import SlideHome from './components/Doors/SlideDoors/SlideHome';
import LeftSlideHome from './components/Doors/LeftSlideDoors/LeftSlideHome';
import InsectHome from './components/InsectScreen/InsectHome';
import CurtainHome from './components/Curtains&Blinds/Curtains/CurtainHome';
import BlindHome from './components/Curtains&Blinds/Blinds/BlindHome';
import CTAHome from './components/CtaSection/CTAHome';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/our-collections/upvc-openable-doors-windows" element={<OpenableHome/>}/>
      <Route path="/our-collections/upvc-slide-doors-windows" element={<SlideHome />}/>
      <Route path="/our-collections/upvc-lift-slide-doors-windows" element={<LeftSlideHome />}/>
      <Route path = "/insect-screen" element={<InsectHome />} />
      <Route path="/our-story" element={<StoryHome/>} />
      <Route path="/upvc" element={<UpvcHome />} />
      <Route path ="/curtains-blinds/curtains" element = {<CurtainHome />} />
      <Route path ="/curtains-blinds/blinds" element = {<BlindHome />} />
      <Route path ="/contact-us" element = {<CTAHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
