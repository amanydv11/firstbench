import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import MockTest from './pages/MockTest'
import TownHall from './pages/TownHall'
import Dashboard from './pages/Dashboard'
import FirstGuru from './pages/FirstGuru'
import AIEvaluation from './pages/AIEvaluation'
import Navbar from './pages/Navbar'
import Performance from './pages/Performance'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/firstguru' element={<FirstGuru/>} />
        <Route path='/' element={<Dashboard/>} />
        <Route path='/evaluation' element={<AIEvaluation/>} />
        <Route path='/mocktest' element={<MockTest/>} />
        <Route path='/performance' element={<Performance/>} />
        <Route path='/townhall' element={<TownHall/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
