import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Navbaar from './Componnets/Navbaar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App

