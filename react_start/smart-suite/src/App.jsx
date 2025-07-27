import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Calculator from './pages/Calculator'
import Converter from './pages/Converter'
import NavBar from './components/NavBar'
import AboutPopup from './components/AboutPopup'
import './App.css'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="calc" element={<Calculator />} />
        <Route path="convert" element={<Converter />} />
      </Routes>
      <AboutPopup />
    </Router>
  )
  }

export default App
