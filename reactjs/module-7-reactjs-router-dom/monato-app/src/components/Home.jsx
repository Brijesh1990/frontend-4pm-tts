import React from 'react'
import man from '../assets/images/man.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div className='w-3/6 mx-auto p-8 shadow-2xl'>
      <h1 className='text-center text-4xl'>Quick delivery at <br />your <span className='text-orange-500 text-center'>Doorstep</span></h1>
      <p className='mt-5 p-5 w-3/6 mx-auto'>Food is any substance consumed by an organism for nutritional support. </p>

      <p className='text-center'><img src={man} alt='man' className='img-fluid w-1/2 mx-auto' /></p>
      <p className='text-center text-orange-600'><span className='bi bi-three-dots text-5xl'></span></p>

      <p className='text-center'><Link to="/dashboard"><button type='button' className='btn bg-orange-600 w-50 p-2 text-white text-xl shadow-2xl'>START</button></Link></p>
      
      </div>
    </>
  )
}
