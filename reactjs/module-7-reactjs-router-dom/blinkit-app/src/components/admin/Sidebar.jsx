import React from 'react'

export default function Sidebar() {
  return (
    <>
    <div className='h-100 fixed mt-32'>
     <img src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png' alt='sidebar' className='w-16' />
     <ul className='sidebar-links'>
        <li><a href='/admin-login/dashboard'>Dashboard</a></li>
        <li><a href='/admin-login/manage-customers'>Manage Customer</a></li>
        <li><a href='/admin-login/add-category'>Add Category</a></li>
        <li><a href='/admin-login/add-fruits'>Add Veg/Fruits</a></li>
        <li><a href='/admin-login/add-events'>Add Events</a></li>
        <li><a href='/admin-login/manage-contacts'>Manage Contact</a></li>
        <li><a href='/admin-login/manage-reviews'>Manage Reviews</a></li>
        <li><a href='/admin-login/logout' className='bg-red-400 p-2 w-full'>Logout</a></li>
     </ul>
    </div>
    </>
  )
}
