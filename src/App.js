import React from 'react'

import { Navbar } from './pages/NavBar/Navbar';
import Intro from './pages/Intro/Intro';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Contact from './pages/contact';
import Footer from './pages/Footer';

import Socials from './components/Icons/Socials'



const App = () => {
  return (
    <div className='container mx-auto py-5 '>
      <Navbar />
      <Intro />
      <Socials />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />

    </div>
  )
}

export default App

