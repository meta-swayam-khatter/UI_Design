import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Tasks from './components/Tasks'



function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Tasks />
    </>
  )
}

export default App
