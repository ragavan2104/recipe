import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favurites'
import ContactUs from './pages/Contactus'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
};


export default App;
