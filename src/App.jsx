import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
// import Toggle from './components/toggle/Toggle'
import Swipers from './components/swipers/swiper'

const App = () => {

  return (
    <>
   
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Swipers/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App