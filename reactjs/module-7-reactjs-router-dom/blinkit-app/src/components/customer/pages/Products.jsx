import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Navigation from '../Navigation';
import PageBanner from './PageBanner';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function Products() {
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
<h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Big disccount Hurry Up!</h1>   
<hr className='w-96 mx-auto border-1'/>
{/* products section */}

{/* products items */}
<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2 shadow-2xl p-3'>
<Link to="/products-details">
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</Link>
</div> 

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 

</div>


<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 

</div>


<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 

</div>


<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
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
