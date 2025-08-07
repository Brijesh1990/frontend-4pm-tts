import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import { Container,Row } from 'react-bootstrap'
export default function Contact() {
  return (
    <>
    <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>Contact Us</h2>
            <Row>
                <div className='col-md-4 shadow p-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799314943046!2d70.77238027412226!3d22.29011104326695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1743998954544!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col-md-7 ms-5 p-5'>
                   <hr className='w-25' />
                   <form>
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Name *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='email *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Phone *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Subject *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Comment *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-3'>
                        <input type='submit' placeholder='Name *' className='btn btn-lg btn-dark text-white' value="Send" />
                    </div>
                   </form>
                   
                </div>
            </Row>
        </Container>
        </>
  )
}
