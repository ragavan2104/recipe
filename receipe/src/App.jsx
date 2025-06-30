import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favurites'
import ContactUs from './pages/Contactus'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
