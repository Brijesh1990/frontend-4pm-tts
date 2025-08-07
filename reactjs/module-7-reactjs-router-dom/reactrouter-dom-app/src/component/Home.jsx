import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Home() {
  return (
    <>
        <Container className='p-5 mt-5 content'>
            <h2>React Router DOM</h2>
            <Row>
                <div className='col-md-4 shadow p-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGdhN_FZ8lDGke1fYv4-eBt-VRVGnf8JNfbF3dBqNRrxMF73uSNTYBNXBP3bJXpplJvk&usqp=CAU' className='img-fluid' />
                </div>
                <div className='col-md-7 ms-5 p-5'>
                   <h1>Download Now</h1>
                   <h4>React Router Tutorials</h4>
                   <button type='button' className='btn btn-md btn-danger text-white'>Play store</button>
                </div>
            </Row>
        </Container>
    </>
  )
}
