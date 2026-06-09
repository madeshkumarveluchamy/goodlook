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

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/collections/openabledoors" element={<OpenableHome/>}/>
      <Route path="/collections/slidedoors" element={<SlideHome />}/>
      <Route path="/collections/leftslidedoors" element={<LeftSlideHome />}/>
      <Route path = "/insect" element={<InsectHome />} />
      <Route path="/story" element={<StoryHome/>} />
      <Route path="/upvc" element={<UpvcHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
