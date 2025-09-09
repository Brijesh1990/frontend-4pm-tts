import React from 'react'
import { Link } from 'react-router-dom'
export default function WelcomeApp() {
  return (
    
    // welcome page using grid in tailwinds
    <div className="min-h-screen grid grid-cols-2 items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
        <div className='text-white p-5'>
            <h1 className="text-4xl font-bold mb-0">Welcome to Our Contact Page</h1>
            <p className="text-lg">We are here to help you. Please fill out the form to get in touch with us.</p>
            {/* view all contact data */}
            <Link to="/manage-contact"><button className='w-60 max-auto ms-30 mt-10 p-2 rounded-4xl bg-red-700 text-white text-xl'>View all Data</button>
            </Link>
        </div>
        <div className='w-full'>
            <img src="https://assets-v2.lottiefiles.com/a/e84e8ee6-1170-11ee-9647-d3729348d81a/WnrwQzHsg9.gif" alt="Welcome" className="w-full h-full object-cover" />
        </div>
    </div>

  )
}
