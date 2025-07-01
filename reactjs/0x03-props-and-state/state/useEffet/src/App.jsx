import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [name, setName] = useState("John Doe")

  return (
    <>
      <Greeting name={name} />
      <button onClick={() => setName("Alban")}>
        Change name
      </button>
    </>
  )
}

export default App
