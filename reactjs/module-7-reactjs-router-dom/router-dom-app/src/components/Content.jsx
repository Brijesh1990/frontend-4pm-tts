import React from 'react'
export default function Content() {
  return (
    <div>
        <h1>Welcome to Our Website</h1>
        <p>This is the home page where you can find the latest updates and news.</p>
        <p>Explore our services and contact us for more information.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
        <a href="/services" className="btn btn-secondary">View Services</a>
        <a href="/about" className="btn btn-info">Learn More About Us</a>
        <a href="/page-not-found" className="btn btn-danger">Test 404 Page</a>
        <a href="/non-existent-page" className="btn btn-warning">Test Non-Existent Page</a>
        <a href="/services" className="btn btn-success">Explore Our Services</a>
        <a href="/contact" className="btn btn-light">Get in Touch</a>
        <a href="/about" className="btn btn-dark">About Us</a>  
    </div>
  )
}
