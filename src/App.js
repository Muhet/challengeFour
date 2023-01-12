import React from 'react'

import { Navbar } from './pages/NavBar/Navbar';
import Intro from './pages/Intro/Intro';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Contact from './pages/contact';
import Footer from './pages/Footer';




const App = () => {
  return (
    <div className=' '>
      
    
      <Navbar />
       <Intro/>
        <About/>
        <Experience/>
        <Work/>
       <Contact/>
        <Footer/>
    
    </div>
  )
}

export default App

