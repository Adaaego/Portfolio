import { useState } from 'react';
//importing pages 
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

//importing global styling
import GlobalStyle from './components/GlobalStyle'

//importing router
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <GlobalStyle/>
    <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/Projects" element={<MyProjects />} />
        <Route path="/Contact" element={<ContactMe />} />
      </Routes>

    </>
  )
}

export default App
