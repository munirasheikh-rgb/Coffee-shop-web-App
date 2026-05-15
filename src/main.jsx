import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './Pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <div>
     <App />
     </div>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
