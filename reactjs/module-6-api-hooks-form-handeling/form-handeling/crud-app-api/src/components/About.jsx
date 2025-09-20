import React from 'react'
import NavbarApp from './Navbar'
export default function About() {
  return (
    <div>
        <NavbarApp />
        <h1>About Us</h1>
        <p>We are a team of dedicated professionals committed to providing the best services.</p>
        <p>Our mission is to deliver high-quality solutions that meet our clients' needs.</p>
        <p>With years of experience in the industry, we strive to exceed expectations and build long-lasting relationships.</p>
        <p>Contact us to learn more about our services and how we can help you achieve your goals.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>   

        <a href="/services" className="btn btn-secondary">View Services</a>
        <a href="/" className="btn btn-info">Back to Home</a>
      
    </div>
  )
}
