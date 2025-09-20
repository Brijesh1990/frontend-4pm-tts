import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function PageNotFound() {
  return (
    <>
      <NavbarApp />
    
    <div className='content p-5 bg-white'>
        
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or return to the home page.</p>
        <a href="/" className='fs-3'>Go to Home</a>
        <br />
        <br/>
        <a href="/contact" className="btn btn-primary ms-0">Contact Us</a>
        <a href="/services" className="btn btn-secondary ms-3">View Services</a> 
      
    </div>
    <Footer />
    </>
  )
}
