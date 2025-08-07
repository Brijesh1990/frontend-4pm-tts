import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import { Container,Row } from 'react-bootstrap'
export default function PageNotFound() {
  return (
    <>
    <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>Page Not Found (404 errors)</h2>
            <Row>
                <div className='col-md-4 shadow p-5'>
                    <img src='https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif' className='img-fluid' />
                </div>
                <div className='col-md-7 ms-5 p-5'>
                   <h1>Go to Home Page</h1>
                   <h4>React Router Tutorials</h4>
                   <Link to="/"><button type='button' className='btn btn-md btn-danger text-white'>Click Here</button></Link>
                </div>
            </Row>
        </Container>
        </>
  )
}
