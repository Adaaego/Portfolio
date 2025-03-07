import { useState } from 'react'
//importing pages 
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'

//import global styling
import GlobalStyle from './components/GlobalStyle'


function App() {
  return (
    <>
    <Nav/>
    <GlobalStyle/>
    <AboutUs />

    </>
  )
}

export default App
