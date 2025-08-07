import React from 'react'
import { Link } from 'react-router-dom'
export default function Content() {
  return (
    <>
         <div className='w-3/6 mx-auto p-8'>
         
          <div className='parent flex row-auto shadow-xl p-5'>
           <div className='child1'><img src='https://pngimg.com/d/pizza_PNG43989.png' className='rounded-circle w-25' /></div>
           <div className='child2 text-center w-128'><p>Fruti sandwich pizza<p className='text-xl'>Rs. 270-/</p></p></div>
           <div className='child3'><button type='number' className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl'>1</button></div>  
          </div>  
         
          <div className='parent flex row-auto mt-8 p-5'>
           <div className='child1'><img src='https://pngimg.com/d/pizza_PNG43989.png' className='rounded-circle w-25' /></div>
           <div className='child2 text-center w-128'><p>Margerita sandwich pizza<p className='text-xl'>Rs. 270-/</p></p></div>
           <div className='child3'><button type='number' className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl'>1</button></div>  
          </div>  

          <div className='parent flex row-auto mt-8 p-5'>
           <div className='child1'><img src='https://pngimg.com/d/pizza_PNG43989.png' className='rounded-circle w-25' /></div>
           <div className='child2 text-center w-128'><p>Crunchy sandwich pizza<p className='text-xl'>Rs. 270-/</p></p></div>
           <div className='child3'><button type='number' className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl'>1</button></div>  
          </div>  

          
          <div className='parent flex row-auto mt-8 p-5'>
           <div className='child2 text-center w-1/2'><p className='text-orange-600'>Total Price<p className='text-xl text-black'>Rs. 870-/</p></p></div>
           <div className='child3 w-1/2'>
           <Link to="/payments"><button type='button' className='btn bg-orange-600 w-50 p-2 text-white text-xl shadow-2xl'>ORDER NOW</button></Link>
           </div>  
          </div>  

         </div>
    </>
  )
}
