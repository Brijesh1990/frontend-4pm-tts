import React,{useState} from 'react'
import {Container,Row} from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function FeedbackApp() {
// const[name,setName]=useState("");    
// desructured all form data 
const[data,setData]=useState({
// create a blank string
fname:"",
lname:"",
email:"",
phone:"",
subject:"",
comment:"",    
});


// create a validations rules destructuring 
const[errors,setErrors]=useState({});
// create a function for validations 
const validate=()=>{
const errors={};
// check for validation 
if(!data.fname)
{
errors.fname="Please enter your firstName";
}
if(!data.lname)
{
errors.lname="Please enter your lastName";
}
if(!data.email)
{
errors.email="Please enter your Email";
}
if(!data.phone)
{
errors.phone="Please enter your Phone numbers";
}
if(!data.subject)
{
errors.subject="Please enter your subject";
}
if(!data.comment)
{
errors.comment="Please enter your comment";
}

return errors;
}
// form changed on onchangevents 
const onChangeSubmit=(e)=>{
e.preventDefault();
const{name,value}=e.target;
setData({...data,[name]:value});

}

// create an function for form submiting
const addFormData=(e)=>{
e.preventDefault();
// pass a validations 
const errors=validate();
if(Object.keys(errors).length===0)
{
console.log('Your form addedd successfully',data);
// pass a swal messages 
//alert('Thanks form adding');
// e.target.reset(); not worked in controlled components 
window.location.href="";
//e.target.reset();
}
else 

{
setErrors(errors);
}  
}

return (
<>
<Container className='w-50 mx-auto mt-5 p-5'>
<h1>Provides your valuables feedback</h1>
<hr />
<Row>
<form onSubmit={addFormData}>
<Row>    
<div className='form-group col-md-6'>
<input type='text' name='fname' value={data.fname} onChange={onChangeSubmit} placeholder='Enter FirstName *' className='form-control p-2' />
{/* pass an errors messages */}

{errors.fname && <p style={{color:"red"}} className='form-group'>{errors.fname}</p> }
</div>
<div className='form-group col-md-6'>
<input type='text' name='lname' value={data.lname} onChange={onChangeSubmit} placeholder='Enter LastName *' className='form-control ms-3 p-2' />
{errors.lname && <p style={{color:"red"}}>{errors.lname}</p> }
</div>
</Row>

<div className='form-group mt-3'>
<input type='text' name='email' value={data.email} onChange={onChangeSubmit}placeholder='Enter email *' className='form-control ms-0 p-2' />
{errors.email && <p style={{color:"red"}}>{errors.email}</p> }
</div>

<div className='form-group mt-3'>
<input type='text' name='phone' value={data.phone} onChange={onChangeSubmit} placeholder='Enter phone *' className='form-control ms-0 p-2' />
{errors.phone && <p style={{color:"red"}}>{errors.phone}</p> }
</div>

<div className='form-group mt-3'>
<input type='text' name='subject' value={data.subject} onChange={onChangeSubmit} placeholder='Enter subject *' className='form-control ms-0 p-2' />

{errors.subject && <p style={{color:"red"}}>{errors.subject}</p> }
</div>

<div className='form-group mt-3'>
<textarea  name='comment' value={data.comment} onChange={onChangeSubmit} placeholder='Enter comment *' className='form-control ms-0 p-2'></textarea>

{errors.comment && <p style={{color:"red"}}>{errors.comment}</p> }
</div>

<div className='form-group mt-3'>
<input type='submit' className='btn btn-lg btn-dark text-white ms-0 p-2' value="Send" />
</div>
</form>
</Row>
</Container>
</>
)
}
