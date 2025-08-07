import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <section id='footer' className='p-16 mt-10 bg-black flex flex-row'>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><Link to='' className='text-3xl'>Page Links </Link></li>
            <li><Link to='/products'>Vegetables</Link></li>
            <li><Link to='/products'>Fruits</Link></li>
            <li><Link to='/products'>Dry Fruits</Link></li>
            <li><Link to='/create-account'>Account</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <li><Link to='/faq'>fAQ</Link></li>
            <li><Link to='/terms-conditions'>Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><Link to='' className='text-3xl'>Our Address </Link></li>
            <li><Link to=''>Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India, and their registered office address is 1042/2, VISTAR COLONY, MAKNPUR INDIRAPURAM, Ghaziabad, Uttar Pradesh, India - 201012</Link></li>
    
          </ul>
        </div>

        <div className='w-full text-white'>
          <ul className='p-5'>
            <li><Link to='' className='text-3xl'>Subscribe NewsLetter </Link></li>
            <li><Link to=''><input type='text' placeholder='subscribe newsletter *' className='p-2 w-full mt-2 bg-white text-black' /></Link></li>
            <li><Link to=''>Terms & Conditions</Link></li>
          </ul>
        </div>
        </section>
    </>
  )
}
