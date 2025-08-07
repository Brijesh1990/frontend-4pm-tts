import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout'
// create a simple routing structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          {/* Define routes for the application */}
          <Route path="/" element={<Layout />} />
          <Route path="/about-us" element={<About />} />
          <Route path='*' element={<PageNotFound />} />
            
          </Routes>
    </Router>
  </StrictMode>,
)
