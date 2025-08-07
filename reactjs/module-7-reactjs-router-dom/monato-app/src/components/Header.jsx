import React from 'react'
export default function Header() {
  return (
   <>
     <div className='w-3/6 mx-auto p-10 shadow-2xl header'>
     <h1 className='text-center text-3xl'>Cart <button type='button' className='float-end'><span className='bi bi-body-text'></span></button></h1>
     </div>
   </>
  )
}
