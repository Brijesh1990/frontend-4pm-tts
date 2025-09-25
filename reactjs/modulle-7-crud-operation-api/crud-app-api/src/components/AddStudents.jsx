import React,{useRef} from 'react'
import axios from 'axios';
import NavbarApp from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function AddStudents() {
// stord data 
const name=useRef("");
const email=useRef("");
const course=useRef("");
const phone=useRef("");
const navigate=useNavigate();
// create a addForm Data 
const addStudentData=(e)=>
{
e.preventDefault();
var insert={
name:name.current.value,
email:email.current.value,
course:course.current.value,
phone:phone.current.value,
}

// create an api for add data 
axios.post(`http://localhost:4000/add-students`,insert).then((res)=>{
try{
 
  console.log(res.data);
  Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
e.target.reset();
navigate('/');
}
catch(error)
{
console.log('error generating',error); 
}
})

}
return (
<>
<NavbarApp />
<div className='content bg-white'>

<form onSubmit={addStudentData} className="container mt-4 p-5">
<h2>Add Students</h2>
<hr className='w-25 border border-2 border-black'/>
<div className="row mb-3">
<div className="col-md-6">
<label htmlFor="name" className="form-label">Name</label>
<input type="text" ref={name} className="form-control" id="name" placeholder="Enter student name" required />
</div>
<div className="col-md-6">
<label htmlFor="email" ref={email} className="form-label">Email</label>
<input type="email" className="form-control" id="email" placeholder="Enter student email" required />
</div>
</div>
<div className="row mb-3">
<div className="col-md-6">
<label htmlFor="course" className="form-label">Course</label>
<input type="text" ref={course} className="form-control" id="course" placeholder="Enter course" />
</div>
<div className="col-md-6">
<label htmlFor="phone" className="form-label">Phone</label>
<input type="tel" ref={phone} className="form-control" id="phone" placeholder="Enter phone number" />
</div>
</div>
<button type="submit" className="btn btn-primary w-100">Add Student</button>
</form>
</div>
<Footer />
</>
)
}
