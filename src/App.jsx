import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/Home.css'
import './css/Contact.css'
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes> 
   </BrowserRouter>
    </>
  )
}

export default App
