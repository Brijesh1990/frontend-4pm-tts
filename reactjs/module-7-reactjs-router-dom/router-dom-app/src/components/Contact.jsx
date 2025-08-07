import React from 'react'
export default function Contact() {
  return (
    <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form>
            <div className="mb-3">

                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    </div>
  )
}
