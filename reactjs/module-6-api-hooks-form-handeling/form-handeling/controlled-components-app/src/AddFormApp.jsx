import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Swal from 'sweetalert2';
export default function AddFormApp() {
// destructuring the data 
const[value,setValue]=useState("");
const[result,setResult]=useState("");
// create a onchnage events 
const onChnageData=(e)=>{
e.preventDefault();
setValue(e.target.value);
}
// create a onSubmit data
const addFormData=(e)=>{
e.preventDefault();
//setResult(value);
// console.log('submitted :',value);
// call a sweetalert messages 

Swal.fire({
title: "Good job!",
text: "Hi :"+value,
icon: "success"
});

}
return (
<>
<Container className='p-5 w-50 mt-5 shadow'>
<h1>Add data</h1>
<hr />
<form onSubmit={addFormData}>
<div className='form-group mt-3'>
<input type='text' value={value} onChange={onChnageData} placeholder='Name ' required className='form-control' />
</div>
<div className='form-group mt-3'>
<input type='submit' value="Submit" required className='btn btn-lg btn-dark text-white' />
</div>
</form>
</Container>
</>
)
}
