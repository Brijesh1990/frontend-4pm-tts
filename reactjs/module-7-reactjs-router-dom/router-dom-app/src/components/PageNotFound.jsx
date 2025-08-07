import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './Navbar'
export default function PageNotFound() {
  return (
    <div>
        <NavbarApp />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or return to the home page.</p>
        <a href="/">Go to Home</a>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
        <a href="/services" className="btn btn-secondary">View Services</a> 
      
    </div>
  )
}
