import React from 'react'
import Navbar from './components/Navbar'
import './styles.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import Team from './components/Team';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='app'>
      <Header/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <WhyChoose/>
      <Team/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default App