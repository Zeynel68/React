import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Comment from './pages/Comments'
import Header from './component/Header'
import Dosyabulunamadi from './pages/Dosyabulunamadi'
import Sign from './pages/sign'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sepet" element={<Comment />} />
        <Route path="/sepet" element={<Sign />} />
        <Route path="/sepet" element={<Login />} />
        <Route path="*" element={<Dosyabulunamadi />} />

      </Routes>
    </div>
  )
}

export default App
