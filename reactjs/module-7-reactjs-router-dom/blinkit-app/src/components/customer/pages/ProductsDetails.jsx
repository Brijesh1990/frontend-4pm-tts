import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function ProductsDetails() {
// used aos
AOS.init();
return (
<>
<Header />
<Navigation />
{/* page  banners  */}
<PageBanner />   
{/* content section  */}
<section id='content' className='container mx-auto mt-16'>
<h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Products Details</h1>   
<hr className='w-96 mx-auto border-1'/>
{/* products section */}

{/* products items */}
<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-128 shadow-2xl p-3 h-98'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
</div> 

<div className='product-grid w-1/2'>
<p className='ms-15'>Home / Milk / Mother Dairy Full Cream Fresh Milk</p>
<p className='text-3xl  ms-15 mt-4'>Best vegetables in Winter (Flowers)</p>
<p className=' text-xl  ms-15 mt-4'>250 gm</p> 
<p className=' text-xl  ms-15 mt-4'>Rs.25-/ (inclusive with all taxes) <del>35-/</del></p> 
<p className='text-3xl ms-15'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>

<p className='text-3xl mt-4 ms-15'>Product Details</p>
<p className='mt-4 ms-15 text-2xl'>Full Cream Milk</p>
<p className='mt-4 ms-15'>Type
Key Features
Wholesome, tasty and healthy
Pasteurised full cream milk
Rich in calcium</p>
<p className='mt-4 ms-15 text-2xl'>Unit</p>
<p className='mt-4 ms-15'>500 ml
FSSAI License
10014011001895
Shelf Life
2 days
Return Policy
The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.
Manufacturer's Name and Address
Mother Dairy Fruit & Vegetable Pvt. Ltd., Unit-Motihari, Village-Bathna, PO.-Piprakothi, Purbi Champaran, Bihar-845429
Country of Origin
India
Customer Care Details
Email: info@blinkit.com
Seller
KEMEXEL ECOMMERCE PRIVATE LIMITED</p>

</div>

</div>

<div className='help-desk  mt-16 w-full' data-aos="fade-up"
data-aos-duration="2000">
<h1 className='text-5xl text-center font-mono'>Any help contact with Us!</h1>
<hr className='w-128 mx-auto border-1' />
<div className='w-1/2 p-5 mt-5 mx-auto'>
<p className='text-center'><img src='https://media0.giphy.com/media/lebpnk3qVPAjBxIKKc/giphy.gif?cid=6c09b952gnsx8cn97w1jl5oewe3ieu10i72l3ek9igb7agow&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' alt='help' /></p>
<p className='text-center animate-bounce text-4xl mt-3'>Call Us : <span className='bi bi-telephone'></span> (+91)-1800-3500-180</p>

</div>

</div>
</section>
<Footer />
</>
)
}
