import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting';

function App() {
  const user = 'AK';

  return (
    <>
      <Greeting />
    </>
  )
}

export default App
