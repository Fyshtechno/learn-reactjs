// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/home'
import Booking from './pages/booking'
import Contact from './pages/contact'
import { Routes, Route } from "react-router-dom"
import { NavigationsBar } from './components/NavigationsBar'

function App() {

  return (
    
      <NavigationsBar>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="booking" element={ <Booking/> } />
        <Route path="contact" element={ <Contact/> } />
    </Routes>
      </NavigationsBar>

  )
}

export default App

// Shortcut na pencet CTR+Space
// kela rada poho
// naha kitu ajg 
// Lain nyieun folder tapi nyieun file .jsx te kudu nyieun folder deui
// aing ingetna make folder navbar tea harita ma 
// kela poho
// teu bisa di jero route meren 
// lamun nyieun footer ge berarti carana sarua kan ?
// Footer kan konsep na jiga navbar jadi hijikeun di komponen navbart
// teu misah komponen ? soalna eweuh action button, cuman sponsored dll kontena,
// ALus na misah jien komponen khusu footer ke panggil na di navbar
// tapi posisina moal nempel di luhur ? 
// Moal kan di simpen na di handapen children