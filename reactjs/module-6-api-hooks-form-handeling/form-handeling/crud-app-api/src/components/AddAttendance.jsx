import React from 'react'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function AddAttendance() {
  return (
    <>
        <NavbarApp />
    
    <div className='content bg-white'>
    <form className="p-5">
     <h2>Add Attendance</h2>
      <hr className='w-25 border border-2 border-black'/>
        <div className="col-md-6">
            <label htmlFor="studentName" className="form-label">Student Name</label>
            <input type="text" className="form-control" id="studentName" placeholder="Enter name" />
        </div>
        <div className="col-md-6 mt-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" />
        </div>
        <div className="col-md-6 mt-2">
            <label htmlFor="status" className="form-label">Status</label>
            <select className="form-select" id="status">
                <option value="">Choose...</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
            </select>
        </div>
        <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary">Add Attendance</button>
        </div>
    </form>
    </div>
    <Footer />
    </>
    

  )
}
