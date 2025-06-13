import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home } from './pages/Home'
import { Me } from './pages/Me'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'
import { Requirements } from './pages/Requirements'
import { Course } from './pages/Course'
import { ContextProvider } from './globals/ContextProvider.jsx'
import { LanguageSwitch } from './components/LanguageSwitch.jsx'
import { Footer } from './components/Footer'

function App() {

  return (
    <ContextProvider>
      <Router>
        <LanguageSwitch />
        <div className="min-h-screen bg-black relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/me" element={<Me />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/requirements" element={<Requirements />} />
              <Route path="/course" element={<Course />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App