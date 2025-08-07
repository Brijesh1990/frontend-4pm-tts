import React from 'react'
import { Link } from 'react-router-dom'
export default function OrderApp() {
  return (
    <>
 <div className='w-3/6 mx-auto p-10 shadow-2xl header'>
     <b className='text-center text-3xl ms-30 text-green-900 animate-pulse'>Your Order successfully </b>
     </div>
         <div className='w-3/6 mx-auto p-8'>
          <div className='parent flex row-auto shadow-xl p-5'>
           
           <div className='child1 mx-auto w-full ms-25'><img src='https://i.pinimg.com/originals/b9/88/b7/b988b7c3e84e1f83ef9447157831b460.gif' className='rounded-circle w-100' /></div>

          </div>           

          <div className='parent flex row-auto mt-8 p-5'>
           <div className='child2 text-center w-1/2'><p className='text-orange-600'>Sub Total Price<p className='text-xl text-black'>Rs. 870-/</p></p></div>
           <div className='child3 w-1/2'>
           <Link to="/payments"><button type='button' className='btn bg-orange-600 w-50 p-2 text-white text-xl shadow-2xl'>Thanks for used our services</button></Link>
           </div>  
          </div>  

         </div>
    </>
  )
}
