import { useState } from 'react';
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
