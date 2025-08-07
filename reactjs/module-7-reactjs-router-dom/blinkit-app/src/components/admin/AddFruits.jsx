import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
export default function AddFruits() {
return (
<>
<Header />
<div className='p-0 w-full flex flex-row'>
<div className='w-65  p-10 bg-black'>
<Sidebar />   
</div>
<div className='w-full mt-40'>
<h1 className='text-5xl ms-2'>Add Fruits</h1>
<hr className='border-1 w-55 ms-5' />
<form className='mt-5'>
<div className='form-group mt-2 p-5'>
<select name='category' placeholder='Category Name *' className='w-1/2 p-2 border-2'>
    <option value="">-select category-</option>
</select> 
</div>

<div className='form-group mt-2 p-5'>
  <input type='text' placeholder='Fruits Name *' className='w-1/2 p-2 border-2' /> 
</div>

<div className='form-group mt-2 p-5'>
  <input type='text' placeholder='Fruits Photo URL *' className='w-1/2 p-2 border-2' /> 
</div>

<div className='form-group mt-2 p-5'>
  <input type='text' placeholder='Fruits Price *' className='w-1/2 p-2 border-2' /> 
</div>

<div className='form-group mt-2 p-5'>
  <input type='text' placeholder='Fruits qty *' className='w-1/2 p-2 border-2' /> 
</div>


<div className='form-group mt-2 p-5'>
  <textarea  placeholder='Fruits Descriptions *' className='w-1/2 p-2 border-2'></textarea>  
</div>

<div className='form-group mt-2 p-5'>
  <input type='submit' value="Add Fruits"  className='bg-black p-3 text-white' /> 
</div>
</form>


{/* manage category */}
<h1 className='text-5xl ms-2'>Manage Fruits</h1>
<hr className='border-1 w-55 ms-5' />
<table className='table table-auto m-15  mt-10 border-2 p-25  w-4/5 ms-5' border="1" cellPadding="5" cellSpacing="5">
  <tr>
    <th>#id</th>
    <th>Name</th>
    <th>Descriptions</th>
    <th>Action</th>
  </tr>

  <tr className='text-center'>
    <td>101</td>
    <td>101</td>
    <td>101</td>
    <td><button type='button' className='bg-blue-700 text-white m-2 p-2'>edit</button>
    <button type='button' className='bg-red-700 ms-2 text-white m-2 p-2'>delete</button></td>
  </tr>

  
  <tr className='text-center'>
    <td>101</td>
    <td>101</td>
    <td>101</td>
    <td><button type='button' className='bg-blue-700 text-white m-2 p-2'>edit</button>
    <button type='button' className='bg-red-700 ms-2 text-white m-2 p-2'>delete</button></td>
  </tr>

  
  <tr className='text-center'>
    <td>101</td>
    <td>101</td>
    <td>101</td>
    <td><button type='button' className='bg-blue-700 text-white m-2 p-2'>edit</button>
    <button type='button' className='bg-red-700 ms-2 text-white m-2 p-2'>delete</button></td>
  </tr>
  
  
</table>
</div>
</div>
</>
)
}
