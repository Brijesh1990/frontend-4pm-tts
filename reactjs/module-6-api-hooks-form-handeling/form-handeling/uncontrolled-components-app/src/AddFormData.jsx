import React,{useRef} from 'react'
import { Container } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function AddFormData() {
// stored data 
const name=useRef("");
// create a form handeling function 
const addFormData=(e)=>{
    e.preventDefault();
    var insdata={
        name:name.current.value
    }
    // print messages
 Swal.fire({
  title: "",
  text: "Your name is :"+insdata.name,
  icon: "success"
});
e.target.reset(); //reset form data
}
  return (
   
<Container className='p-5 w-50 mt-5 shadow'>
<h1>Add data via uncontrolled components</h1>
<hr />
<form onSubmit={addFormData}>
<div className='form-group mt-3'>
<input type='text' ref={name}  placeholder='Name ' required className='form-control' />
</div>
<div className='form-group mt-3'>
<input type='submit' value="Submit" required className='btn btn-lg btn-dark text-white' />
</div>
</form>
</Container>
  )
}
