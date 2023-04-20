import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalClock from './components/DigitalClock'
import Countdown from './components/Countdown'

function App() {

  return (
    <>
      <DigitalClock/>
      <Countdown />
    </>
  )
}

export default App
