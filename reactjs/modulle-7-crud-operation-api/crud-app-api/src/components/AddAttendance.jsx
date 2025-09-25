import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import NavbarApp from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddAttendance() {
//fetch students name in add attendance form 
const[stname,setstName]=useState("");
useEffect(()=>{
    axios.get(`http://localhost:4000/add-students`).then((response)=>{
        setstName(response.data);
    })
},[stname]);
// stord data 
const studentname=useRef("");
const attdate=useRef("");
const status=useRef("");
// create a addForm Data 
const addAttendanceData=(e)=>
{
e.preventDefault();
var insert={
studentname:studentname.current.value,
attdate:attdate.current.value,
status:status.current.value,
}

// create an api for add data 
axios.post(`http://localhost:4000/add-attendance`,insert).then((res)=>{
try{

console.log(res.data);
Swal.fire({
title: "Congratulations!",
text: "Your attendance addded succefully!",
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
<form onSubmit={addAttendanceData} className="p-5">
<h2>Add Attendance</h2>
<hr className='w-25 border border-2 border-black'/>
<div className="col-md-6">
<label htmlFor="studentName" className="form-label">Select Student Name</label>
<br/>
<select name='studentname' ref={studentname} className='form-control'>
    <option value="">-select students-</option>
    {stname && stname.map((items)=>{
        return(
            <>
             <option value={items.name}>{items.name}</option>
            </>
        )
    })}
   

</select>
</div>
<div className="col-md-6 mt-3">
<label htmlFor="date" className="form-label">Date</label>
<input type="date" ref={attdate} className="form-control" id="date" />
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
<div className="col-12 mt-3">
<button type="submit" className="btn btn-primary">Add Attendance</button>
</div>
</form>
</div>
<Footer />
</>


)
}
