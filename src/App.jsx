import { useState } from 'react';
//importing pages 
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import MovieDetail from './pages/MovieDetail';

//importing global styling
import GlobalStyle from './components/GlobalStyle'

//importing router
import { Routes, Route, useLocation } from 'react-router-dom';

//animations
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <>
    <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutUs />} />
        <Route path="/Projects" element={<MyProjects />} />
        <Route path="/Projects/:id" element={<MovieDetail/>} />
        <Route path="/Contact" element={<ContactMe />} />
      </Routes>
      </AnimatePresence>

    </>
  )
}

export default App
