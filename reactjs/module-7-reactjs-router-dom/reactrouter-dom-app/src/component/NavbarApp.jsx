import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <>
        <Nav className='nav navbar navbar-expand-md bg-dark text-white p-3 shadow fixed-top'>
           {/* logo */}
           <Link to="/" className='navbar-brand text-white fs-1 ms-5'>BlinkKit App</Link>
           {/* toggler button */}
           <button type='button' className='navbar-toggler btn btn-dark text-white p-1 border border-0' data-bs-toggle="collapse" data-bs-target="#btnClk">
            <span className='bi bi-grid fs-1 p-2 text-white'></span>
           </button>
           <div className='collapse navbar-collapse' id='btnClk'>
           <ul>
            <li><Link to="/"><span className='bi bi-house'></span> Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-portfolio">Portfolio</Link></li>
            <li><Link to="/our-gallery">Gallery</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/contact-us" className='btn btn-md btn-danger text-white'>Contact</Link></li>
           </ul>
           </div>
        </Nav>
    </>
  )
}
