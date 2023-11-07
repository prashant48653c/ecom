import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slidebanner from './components/Slidebanner'
import Product from './components/Product'
 import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { Slide } from '@mui/material'
import Home from './components/Home'

function App() {
   

  return (
    <>
  <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route  path='/' element={ <Home/>  }  />
      <Route  path='/product' element={ <Product/>  }  />

    </Routes>
  </BrowserRouter>
   
    <Footer/>
 
  </>
  )
}

export default App
