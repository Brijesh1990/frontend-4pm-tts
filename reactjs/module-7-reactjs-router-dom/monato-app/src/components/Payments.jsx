import React from 'react'
import { Link } from 'react-router-dom'
export default function Payments() {
  return (
    <>
    <div className='w-3/6 mx-auto p-10 shadow-2xl header'>
     <h1 className='text-center text-3xl'>Payments <button type='button' className='float-end'><span className='bi bi-body-text'></span></button></h1>
     </div>
         <div className='w-3/6 mx-auto p-8'>
         
          <div className='parent flex row-auto shadow-xl p-5'>
           
           <div className='child1'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdliH0kic1csdbpKcl9yO90qygkK22Bqqj-idm28UNJulKpTQTEQJMePLNFPKpgnzCC0E&usqp=CAU' className='rounded-circle w-25' /></div>

           <div className='child2 text-center w-128'><p className='text-xl'>Paypal</p></div>

           <div className='child3'><input type='radio' name='paid' value="paypal" className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl' /></div>  
          
          </div>  

          <div className='parent flex row-auto shadow-xl p-5'>
           
           <div className='child1'><img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' className='rounded-circle w-25' /></div>

           <div className='child2 text-center w-128'><p className='text-xl'>Google Pay</p></div>

           <div className='child3'><input type='radio' name='paid' value="google" checked="checked" className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl' /></div>  
          
          </div>  

          <div className='parent flex row-auto shadow-xl p-5'>
           
           <div className='child1'><img src='https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667' className='rounded-circle w-25' /></div>

           <div className='child2 text-center w-128'><p className='text-xl'>Credit Card</p></div>

           <div className='child3'><input type='radio' name='paid' value="credit" className='bg-orange-600 w-6 h-15 float-end text-white rounded-2xl' /></div>  
          
          </div>  


          <div className='w-full shadow-2xl p-8 bg-white mt-5'>
           <div className='rounded-2xl'>
           <table width="100%">
            <tr className='w-full'>
                <th className='text-left'>Selected Items</th>
                <td>3</td>
            </tr>

            <tr className='w-full'>
                <th className='text-left'>Delivery</th>
                <td>Rs. 270 -/</td>
            </tr>

            <tr className='w-full'>
                <th className='text-left'>Total</th>
                <td>Rs. 270 -/</td>
            </tr>
           </table>
           </div>
          </div>  
          
         
          <div className='parent flex row-auto mt-8 p-5'>
           <div className='child2 text-center w-1/2'><p className='text-orange-600'>Sub Total Price<p className='text-xl text-black'>Rs. 870-/</p></p></div>
           <div className='child3 w-1/2'>
           <Link to="/order-successfully"><button type='button' className='btn bg-orange-600 w-50 p-2 text-white text-xl shadow-2xl'>Pay NOW</button></Link>
           </div>  
          </div>  

         </div>
    </>
  )
}
