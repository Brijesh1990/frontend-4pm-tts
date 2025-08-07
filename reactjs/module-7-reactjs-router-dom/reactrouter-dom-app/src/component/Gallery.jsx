import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import { Container,Row } from 'react-bootstrap'
export default function Gallery() {
  return (
    <>
    <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>Our Gallery</h2>
            <hr />
            <Row>
                <div className='col-md-4 p-4'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ri9x49CdiHRf7QFvhEO0-ShFXZdMSIx_Wg&s' alt='photo' className='img-fluid w-100 h-100' />
                </div>
                <div className='col-md-8 p-4'>
                <img src='https://www.pegasusart.co.uk/blog/wp-content/uploads/2020/05/pauline-loroy-AlLKJ292jOQ-unsplash-scaled.jpg' alt='photo' className='img-fluid w-100 h-100' />
                </div>
                <div className='col-md-8 p-4'>
                <img src='https://res.cloudinary.com/simpleview/image/upload/v1641565939/clients/roanoke/temp_d0740616-f692-4942-9fe2-b7c68b87384e.jpg' alt='photo' className='img-fluid w-100' />
                </div>
                <div className='col-md-4 p-4'>
                <img src='https://artgallery.yale.edu/sites/default/files/styles/hero_small/public/2023-01/ag-doc-2281-0036-pub.jpg?h=147a4df9&itok=uclO7OrF' alt='photo' className='img-fluid w-100 h-100' />
                </div>
            </Row>
        </Container>
        </>
  )
}
