import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './ContactUs'
import WelcomeApp from './WelcomeApp'
import ManageContact from './ManageContact'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/welcome" element={<WelcomeApp />} />
        <Route path="/manage-contact" element={<ManageContact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
