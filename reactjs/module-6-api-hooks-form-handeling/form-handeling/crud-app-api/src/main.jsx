import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Layout from './Layout'
import AddStudents from './components/AddStudents'
import AddAttendance from './components/AddAttendance'
// create a simple routing structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Feedback from './components/Feedback'
import PageNotFound from './components/PageNotFound'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          {/* Define routes for the application */}
          <Route path="/" element={<Layout />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/add-students" element={<AddStudents />} />
          <Route path="/add-attendance" element={<AddAttendance />} />
           <Route path="/feedback-us" element={<Feedback />} />
          <Route path='*' element={<PageNotFound />} />
          </Routes>
    </Router>
  </StrictMode>,
)
