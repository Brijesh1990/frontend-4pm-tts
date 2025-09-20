import React from 'react'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function AddStudents() {
  return (
    <>
    <NavbarApp />
    <div className='content bg-white'>
    
    <form className="container mt-4 p-5">
    <h2>Add Students</h2>
    <hr className='w-25 border border-2 border-black'/>
        <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter student name" />
            </div>
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter student email" />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="course" className="form-label">Course</label>
                <input type="text" className="form-control" id="course" placeholder="Enter course" />
            </div>
            <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
            </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Student</button>
    </form>
    </div>
  <Footer />
</>
  )
}
