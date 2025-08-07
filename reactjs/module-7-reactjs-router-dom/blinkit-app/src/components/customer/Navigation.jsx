import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
   <>
    <nav className='container p-3 border-b-1 mx-auto'>
        <ul className='space-x-10 gap-8 flex w-4/5 mx-auto text-xl'>
            <li className='bg-black rounded-sm p-2 text-white'><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About us</Link></li>
            <li><Link to='/products'>Vegetables</Link></li>
            <li><Link to='/products'>Fruits</Link></li>
            <li><Link to='/products'>Dry Fruits</Link></li>
            <li><Link to='/create-account'>Account</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
    </nav>
   </>
  )
}
