import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
export default function PageNotFound() {
  return (
    <>
         <Header />
         <div className='w-3/6 mx-auto p-8'>
         
          <div className='parent flex row-auto shadow-xl p-5'>
           <div className='child1 w-1/2'><img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' className='rounded-circle w-100' /></div>
           <div className='child3 w-1/2 p-8'><Link to="/"><button type='number' className='bg-orange-600  p-2  text-white rounded-2xl'>Go To Home Page</button></Link></div>  
          </div>  
         
         
         </div>
    </>
  )
}
