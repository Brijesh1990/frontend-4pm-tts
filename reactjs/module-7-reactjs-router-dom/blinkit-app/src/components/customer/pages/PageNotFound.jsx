import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
export default function PageNotFound() {
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
<h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Page Not Found(404)</h1>   
<hr className='w-96 mx-auto border-1'/>
{/* 404 section */}

<p className='w-1/2  mx-auto text-center'>
    <img src='https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif' alt='404' />
</p>



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
