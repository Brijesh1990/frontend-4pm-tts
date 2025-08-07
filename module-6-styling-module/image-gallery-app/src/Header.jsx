import React from 'react'
import { Nav,NavbarBrand } from 'react-bootstrap'
export default function Header() {
  return (
    <>
    
    
        <Nav className='nav navbar  navbar-expand-md bg-dark top-0 fixed-top'>
        <NavbarBrand className='ms-5 animate-bounce text-white fs-2'>Blinkit App</NavbarBrand>

        <button type='button' className='btn btn-md bg-dark navbar-toggler' data-bs-toggle="collapse" data-bs-target="#collNav"><span className='bi bi-grid text-white'></span></button>
        
        <div className='collapse navbar-collapse' id='collNav'>
        <ul className='navbar-links'>
          <li><a href='#' className='text-decoration-none text-white'>Home</a></li>
          <li><a href='#' className='text-decoration-none text-white'>Gallery</a></li>
          <li><a href='#' className='text-decoration-none text-white'>About</a></li>
          <li><a href='#' className='text-decoration-none text-white'>Services</a></li>
          <li><a href='#' className='text-decoration-none btn btn-sm btn-primary text-white'>Enquiry</a></li>
          <li><a href='#' className='text-decoration-none text-white'>Cart <span className='bi bi-cart'>0</span></a></li>
        </ul> 
        </div>
      </Nav>
        
        {/* enquiry  */}

      </>
 
  )
}
