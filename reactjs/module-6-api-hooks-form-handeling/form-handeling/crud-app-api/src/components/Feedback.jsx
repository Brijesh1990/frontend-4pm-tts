import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './Navbar'
import Footer from './Footer'
export default function Feedback() {
  return (
    <>
      <NavbarApp />
       <div className='content p-5 bg-white'>

        <h2 className="mb-4">Customer Feedback Form</h2>
        <form>
            <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Street Address" />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" placeholder="City" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="zip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zip" placeholder="Zip Code" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Feedback</label>
                <textarea className="form-control" id="feedback" rows="4" placeholder="Your feedback"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
    </div>
    <Footer />
    </>
  )
}
