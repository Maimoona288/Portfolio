import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
       <div className="pb-20">
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      
     <Footer/>     
    </>
  )
}

export default App
