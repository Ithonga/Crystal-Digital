import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Header from './Components/Header'
import TopHeader from './Components/TopHeader'

function App() {

  return (
    <>
    <TopHeader/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
