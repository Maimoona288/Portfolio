import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
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
      </div>
     <Footer/>     
    </>
  )
}

export default App
