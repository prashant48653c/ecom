import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slidebanner from './components/Slidebanner'
import Product from './components/Product'
 

function App() {
   

  return (
    <>
  <Navbar/>
  <Product/>
    <Footer/>
 
  </>
  )
}

export default App
