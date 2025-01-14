import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp'
import Layout from './Pages/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
