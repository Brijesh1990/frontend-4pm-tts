import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
export default function AboutUs() {
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
<h1 className='animate-pulse text-8xl font-mono text-red-300 text-center'>About Us</h1>   
<hr className='w-96  mx-auto border-1'/>
{/* about section */}

<p className='mt-5 w-4/6 mx-auto text-justify'>

<img src='https://www.adani.com/-/media/Project/Ports/About/gautam-adani.jpg' alt='photo' style={{float:"right",padding:"45px"}} />
<h1 className='text-4xl mt-5'>Chairman's Message</h1>
Goodness is imperative for growth

The Adani Group’s existence and emergence have been an integral part of India’s resurgence. Over the past three decades, we were fortunate to touch millions, who believed in our vision, inspired us to be ambitious, pushed us to achieve those ambitions and disciplined us in setting new benchmarks in everything we did.

Today, as the world watches India move into its most defining phase of growth, the Adani Group’s responsibility towards the nation assumes greater importance. I believe that our responsibility to give back to the society which makes us what we are and our ability to contribute wherever we operate will define our future and hold us together as a global organization.

While we continue to work towards mitigating urban-rural divides and creating equal development opportunities across geographies, we will also explore new horizons catering to the changing aspirations of New India.

It is increasingly being recognized that growth is incomplete if it is bereft of any good for the nation and the society as a whole. For me, growth must infuse prosperity - it must infuse, harmony and most of all - it must infuse happiness!

Over the past 30 years, we have created stellar and sustainable assets fundamental to nation-building. The vision for the future must be to scale up the goodness factor. It must be to tap into new opportunities - within India as well as across the world.

When I say goodness, it is broadly split into three dimensions.

First, our presence in businesses critical to a nation must have a defining impact on the millions of lives touched by our projects. Whether it is delivering cooking gas to a fuel-starved rural kitchen or safe-keeping the country’s staple food produce, our acts must contribute to the country’s happiness index.

Secondly, we must ensure that our immediate communities settled around our business sites are empowered by our presence and become self-reliant in the shadow of our expansion.

Thirdly, we must continue to foray into sectors where the country needs to establish a foothold. We will look at these opportunities as part of our national duty.

We, at the Adani Group, believe in enriching lives, through state-of-the-art infrastructure and our contributions to nation-building.

We believe in Growth with Goodness.</p>



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
