import { useState } from 'react'
import './App.css'
import ControlledInput from './components/ControlledInput'
import TodoList from './components/AnotherControlledInput'

function App() {

  return (
    <>
      <ControlledInput />
      <TodoList />
    </>
  )
}

export default App
