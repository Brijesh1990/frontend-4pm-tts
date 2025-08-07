import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './Layout'
import Payments from './components/Payments'
import OrderApp from './components/OrderApp'
import PageNotFound from './components/PageNotFound'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Layout />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/order-successfully' element={<OrderApp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
