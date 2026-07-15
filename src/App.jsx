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
  import CasementDoorsHome from './components/Doors/casementdoors/CasementDoorsHome';
  import SlidingDoorsHome from './components/Doors/slidingdoors/SlidingDoorsHome';
  import ArchDoorsHome from './components/Doors/archdoors/ArchDoorsHome';
  import TiltTurnDoorsHome from './components/Doors/Tilt&turndoors/TiltTurnDoorsHome';
  import FrenchDoorsHome from './components/Doors/frenchdoors/FrenchDoorsHome';
  import FrenchSlidingDoorsHome from './components/Doors/frenchslidingdoors/FrenchSlidingDoorsHome';
  import SlidingFoldingDoorsHome from './components/Doors/sliding&foldingdoors/SlidingFoldingDoorsHome';
  import ArchWindowsHome from "./components/windows/archwindows/ArchWindowsHome"
  import CasementWindowsHome from "./components/windows/casementwindows/CasementWindowsHome"
  import FixedWindowsHome from "./components/windows/fixedwindows/FixedWindowsHome"
  import FrenchWindowsHome from "./components/windows/frenchwindows/FrenchWindowsHome"
  import SlidingWindowsHome from "./components/windows/slidingwindows/SlidingWindowsHome"
  import TiltTurnWindowsHome from "./components/windows/Tilt&turnwindows/TiltTurnWindowsHome"
  import  VentilatorWindowsHome from "./components/windows/ventilatorwindows/VentilatorWindowsHome"
  import MosWindowHome from './components/InsectScreen/threeoptions/moswindow/MosWindowHome';
  import MosDoorsHome from './components/InsectScreen/threeoptions/mosdoors/MosDoorsHome';

  import AllMusquitoNetWindows from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/AllMusquitoNetWindow';
  import FixedFrameNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/FixedFrameNetWindow';
  import MagneticMosquitoNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/MagneticMosquitoNetWindow';
  import PleatedMosquitoNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/PleatedMosquitoNetWindow';
  import RollerMosquitoNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/RollerMosquitoNetWindow';
  import SlidingMosquitoNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/SlidingMosquitoNetWindow';
  import VelcroMosquitoNetWindow from './components/InsectScreen/threeoptions/moswindow/moswindowtypes/VelcroMosquitoNetWindow';

  import AllMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/AllMosquitoNetDoors';
  import HingedMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/HingedMosquitoNetDoors';
  import MagneticMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/MagneticMosquitoNetDoors';
  import PleatedMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/PleatedMosquitoNetDoors';
  import RollerMosquitoScreensDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/RollerMosquitoScreensDoors';
  import SlidingMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/SlidingMosquitoNetDoors';
  import VelcroMosquitoNetDoors from './components/InsectScreen/threeoptions/moswindow/mosdoortypes/VelcroMosquitoNetDoors';

import FoldableWindowsHome from './components/windows/combinationwindows/FoldableWindowsHome';

  const App = () => {
    return (
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-collections/upvc-doors/casement-doors" element={<CasementDoorsHome />}/>
        <Route path="/our-collections/upvc-doors/sliding-doors" element={<SlidingDoorsHome />}/>
        <Route path="/our-collections/upvc-doors/arch-doors" element={<ArchDoorsHome />}/>
        <Route path="/our-collections/upvc-doors/tilt-and-turn-doors" element={<TiltTurnWindowsHome />}/>
        <Route path="/our-collections/upvc-doors/french-doors" element={<FrenchDoorsHome />}/>
        <Route path="/our-collections/upvc-doors/french-sliding-doors" element={<FrenchSlidingDoorsHome />}/>
        <Route path="/our-collections/upvc-doors/folding-doors" element={<SlidingFoldingDoorsHome />}/>
        <Route path="/our-collections/upvc-windows/casement-windows" element={<CasementWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/sliding-windows" element={<SlidingWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/arch-windows" element={<ArchWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/tilt-and-turn-windows" element={<TiltTurnWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/french-windows" element={<FrenchWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/fixed-windows" element={<FixedWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/ventilator-windows" element={<VentilatorWindowsHome />}/>
        <Route path="/our-collections/upvc-windows/foldable-windows" element={<FoldableWindowsHome />}/>
        <Route path = "/insect-screen" element={<InsectHome />} />
        <Route path = "/insect-screen/mosquito-net-for-window" element ={<MosWindowHome />} />
        <Route path = "/insect-screen/mosquito-net-for-doors" element ={<MosDoorsHome />} />

        
        /////////////////////////all musqiuto net for windows ////////////////////////////////////////////////////////
        <Route path="/insect-screen/mosquito-net-for-window/all-mosquito-net-window" element={<AllMusquitoNetWindows />}/>
        <Route path="/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window" element={<SlidingMosquitoNetWindow />}/>
        <Route path="/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window" element={<PleatedMosquitoNetWindow />}/>
        <Route path="/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window" element={<RollerMosquitoNetWindow />}/>
        <Route path="/insect-screen/mosquito-net-for-window/foldable-security-mesh-window" element={<FixedFrameNetWindow />}/>

        ///
        <Route path="/insect-screen/mosquito-net-for-doors/all-mosquito-net-doors" element={<AllMosquitoNetDoors />}/>
        <Route path="/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors" element={<SlidingMosquitoNetDoors />}/>
        <Route path="/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors" element={<PleatedMosquitoNetDoors />}/>
        <Route path="/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors" element={<HingedMosquitoNetDoors />}/>
        <Route path="/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors" element={<RollerMosquitoScreensDoors />}/>
    
        ///
        <Route path="/our-story" element={<StoryHome/>} />
        <Route path="/our-collections/upvc-profile" element={<UpvcHome />} />
        <Route path ="/curtains-blinds/curtains" element = {<CurtainHome />} />
        <Route path ="/curtains-blinds/blinds" element = {<BlindHome />} />
        <Route path ="/contact-us" element = {<CTAHome />} />
        </Routes>
        <Footer />
      </div>
    )
  }

  export default App
