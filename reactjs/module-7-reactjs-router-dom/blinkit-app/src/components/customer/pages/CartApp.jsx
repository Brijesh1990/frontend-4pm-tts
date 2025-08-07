import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function CartApp() {
// used aos
AOS.init();
return (
<>
<Header />
<Navigation />

{/* content section  */}
<section id='content' className='container mx-auto mt-16'>
<h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Cart!</h1>   
<hr className='w-25 mx-auto border-1'/>
{/* cart  sections */}

<div className='cart w-full p-15 bg-white'>
   <p className='text-center'><img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='cart' className='img-fluid w-128 mx-auto' /></p>
   <p className='text-center text-3xl'>Missing Cart items?</p>
   <p className='text-center'><Link to="/create-account"><button type='button' className='bg-amber-500 w-52 text-2xl p-3 mt-5'>Login</button></Link></p>   
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
