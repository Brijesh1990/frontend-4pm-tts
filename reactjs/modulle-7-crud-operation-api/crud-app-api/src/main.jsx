import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Layout from './Layout'
import AddStudents from './components/AddStudents'
import AddAttendance from './components/AddAttendance'
import DeleteAttendance from './components/DeleteAttendance'
import ReadData from './components/ReadData'
import EditAttendance from './components/EditAttendance'
// create a simple routing structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
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
          <Route path="/delete-attendance/:id" element={<DeleteAttendance />} />
          <Route path="/read-students/:id" element={<ReadData />} />
          <Route path="/edit-students/:id" element={<EditAttendance />} />
          <Route path="/feedback-us" element={<Feedback />} />
          <Route path='*' element={<PageNotFound />} />
          </Routes>
    </Router>
  </StrictMode>,
)
