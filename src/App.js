import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact';


function App() {
  return <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Work />
    <Contact />
  </>
}

export default App;
