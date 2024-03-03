import React,{useEffect} from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Tracking from './Components/Tracking'
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  useEffect(() => {
    AOS.init({
      duration:2000,
      once: true
  });
  }, [])

  return (
    <>
    <Header></Header>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Services' element={<Services/>} />
        <Route exact path='/Tracking' element={<Tracking/>} />
        <Route exact path='/Contact' element={<Contact/>} />
     </Routes>
   </Router>
   <Footer></Footer>

    </>
  )
}

export default App
