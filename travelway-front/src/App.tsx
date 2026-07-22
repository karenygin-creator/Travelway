import { useState } from 'react'

import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './components/RegisterPage/RegisterPage'

function App() {
  

  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App
