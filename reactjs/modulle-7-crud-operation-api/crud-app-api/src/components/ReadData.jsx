import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import NavbarApp from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function ReadData() {
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


return (
<>

<NavbarApp />
<div className='content bg-white'>
<form  className="container mt-4 p-5">
<h2>Read  Students Data </h2>
<hr className='w-25 border border-2 border-black'/>
<div className="row mb-3">

<div className="col-md-6">
<label htmlFor="name" className="form-label">Read Name</label>
<input type="text" ref={studentname} className="form-control" id="name" placeholder="Enter student name" required />
</div>
<div className="col-md-6">
<label htmlFor="email" className="form-label">Read Date</label>
<input type="date"  ref={attdate} className="form-control" id="email" placeholder="Enter student email" required />
</div>
</div>
<div className="row mb-3">
<div className="col-md-6">
<label htmlFor="course" className="form-label">Read status</label>
<input type="text" ref={status} className="form-control" id="course" placeholder="Enter course" />
</div>

</div>

</form>
</div>
</>
)
}
