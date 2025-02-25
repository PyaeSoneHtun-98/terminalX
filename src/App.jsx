import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Me } from './pages/Me'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'
import { Clients } from './pages/Clients'
import { Preloader } from './components/Preloader'
import { ContextProvider } from './globals/ContextProvider.jsx'
import { LanguageSwitch } from './components/LanguageSwitch.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ContextProvider>
      <Router>
        {loading && <Preloader />}
        <LanguageSwitch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App