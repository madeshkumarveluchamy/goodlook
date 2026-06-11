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
      <Route path="/collections/openabledoors" element={<OpenableHome/>}/>
      <Route path="/collections/slidedoors" element={<SlideHome />}/>
      <Route path="/collections/liftslidedoors" element={<LeftSlideHome />}/>
      <Route path = "/insect" element={<InsectHome />} />
      <Route path="/story" element={<StoryHome/>} />
      <Route path="/upvc" element={<UpvcHome />} />
      <Route path ="/curtains" element = {<CurtainHome />} />
      <Route path ="/Blinds" element = {<BlindHome />} />
      <Route path ="/cta" element = {<CTAHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
