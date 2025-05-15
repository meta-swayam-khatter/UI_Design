import './App.css'

import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import { TaskProvider } from './context/TaskContext'
// import TaskState from './context/TaskState'



function App() {

  return (
    <>
      {/* <TaskState> */}
        <TaskProvider>
          <Navbar />
          <Tasks />
        </TaskProvider>
      {/* </TaskState> */}
    </>
  )
}

export default App
