import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Home from './pages/Home'
import About from './pages/About'
import reactLogo from './assets/icons/react.svg'
import viteLogo from './assets/icons/vite.svg'
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
      </div>
      
     <Footer/>     
    </>
  )
}

export default App
