import './App.css'

import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import { TaskProvider } from './context/TaskContext'



function App() {

  return (
    <>
      <TaskProvider>
        <Navbar />
        <Tasks />
      </TaskProvider>
    </>
  )
}

export default App
