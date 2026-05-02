import { useState } from 'react'
import Header from './components/Header/Header'
import FilmList from './components/CardList/FilmList'
import Footer from './components/Footer/Footer'
import { Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="*" element={
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        } />
      </Routes>

    </>
  )
}

export default App
