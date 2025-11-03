import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './shared/Navbar'
import OverView from './pages/OverView'

function App() {
  return (
    <div className='bg-gray-100 font-serif min-h-screen'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<OverView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
