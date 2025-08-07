import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import { Container,Row } from 'react-bootstrap'
export default function About() {
  return (
    <>
    <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>About us</h2>
            <Row>
                <div className='col-md-4 shadow p-5'>
                    <p>An "About Us" page serves to introduce your company, organization, or individual to your audience, sharing your story, mission, values, and team, ultimately building trust and credibility. It's a crucial part of your website's digital strategy. </p>
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
