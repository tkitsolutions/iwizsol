import React from 'react'
import Navbar from './components/Navbar'
import './styles.scss';
import Hero from './components/Hero';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App