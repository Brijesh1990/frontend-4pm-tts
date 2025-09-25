import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import NavbarApp from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function EditAttendance() {
const[data,setData]=useState("");    
// stord data 
const studentname=useRef("");
const attdate=useRef("");
const status=useRef("");
const navigate=useNavigate();
const {id}=useParams();
// create an api for read data
useEffect(()=>{
    axios.get(`http://localhost:4000/add-attendance/${id}`).then((response)=>{
      setData(response.data); 
    // fetch all data or read all data in input 
    studentname.current.value=response.data.studentname;
    attdate.current.value=response.data.attdate;
    status.current.value=response.data.status;
    
    })
},[id]);

// create a form hanseling function for update data 
const updAttendanceData=(e)=>{
e.preventDefault();
var updatt={
studentname:studentname.current.value,
attdate:attdate.current.value,
status:status.current.value,
}
// call put method of axios to api  update data to update 
axios.put(`http://localhost:4000/add-attendance/${id}`,updatt).then((res)=>{
try{
Swal.fire({
title: "Congratulations!",
text: "Your attendance updated succefully!",
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
<form  onSubmit={updAttendanceData} className="container mt-4 p-5">
<h2>Update attendance Data </h2>
<hr className='w-25 border border-2 border-black'/>
<div className="col-md-6">
<label htmlFor="name" className="form-label">Edit Name</label>
<input type="text" ref={studentname} className="form-control" id="name" placeholder="Enter student name" required />
</div>
<div className="col-md-6">
<label htmlFor="email" className="form-label">Edit Date</label>
<input type="date"  ref={attdate} className="form-control" id="email" placeholder="Enter student email" required />
</div>
<div className="col-md-6 mt-2">
<label htmlFor="status" className="form-label">Status</label>
<select ref={status} className="form-select" id="status">
<option value="">Choose...</option>
<option value="Present">Present</option>
<option value="Absent">Absent</option>
<option value="Late">Late</option>
</select>
</div>
<div className="col-md-12 mt-2">
<input type="submit" value="Update Attendance" className="bg-dark btn btn-lg text-white" />
</div>

</form>
</div>
</>
)
}
