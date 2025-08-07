import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function Account() {
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
<h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Create Account</h1>   
<hr className='w-96 mx-auto border-1'/>
{/* contact us sections */}
<div className='contact-us flex flex-row mt-16' data-aos="fade-up"
data-aos-duration="2000">
<div className='address p-16 w-1/2'>
<h1 className='text-5xl'>Why Choose To Us</h1>
<hr className='border-1 w-50'/> 
<p className='mt-8'><b>24x7 customers support</b></p>
<p className='mt-8'><b>Refund policy</b></p>
<p className='mt-8'><b>FAQ via customers care</b></p>
<p className='mt-8'><b>Best in the Area</b></p>

</div>
<div className='contact-form w-1/2 p-16'>
<form className='mt-0'>
<input type='text' placeholder='Email *' className='mt-10 border-b-1 w-full' />
<input type='password' placeholder='Password *' className='mt-10 border-b-1 w-full' />
<input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Sign In" />
<Link to='/forget-password' className='ms-5 text-xl'>Forget Password</Link>
<br />
<br />
<b className='text-xl mt-12'>Don't have an account ?<Link to='/register' className='ms-1 text-xl'>Create account here</Link></b>
</form>
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
