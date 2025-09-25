import React,{useState,useEffect} from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
export default function Content() {
// display attendance
const[attname,setAttName]=useState("");
const navigate=useNavigate();
useEffect(()=>{
axios.get(`http://localhost:4000/add-attendance`).then((response)=>{
setAttName(response.data);
})
},[attname]);

const data = [
["Task", "Hours per Day"],
["Work", 9],
["Eat", 2],
["Commute", 2],
["Watch TV", 2],
["Sleep", 7],
];

const options = {
title: "My Daily Activities",
};

return (
<div className='content bg-white'>
<h1>Welcome to AMS App</h1>
<hr className='w-25 border border-2 border-dark' />
<h3><Link to='/add-attendance'><button type='button' className='btn btn-lg btn-primary'>Add Attendance <span className='bi bi-person'></span></button></Link>

{/* <button type='button' className='btn btn-lg btn-danger float-end'>Export in Excel <span className='bi bi-file-excel'></span></button> */}

<strong className='ms-5'>Total Attendance : <span className='ps-2 pe-2 bg-danger text-white rounded-circle'>{attname.length}</span></strong>

</h3>  
<table className="table table-bordered w-100 mb-4">
<thead>
<tr>
<th>Id</th>
<th>Students Name</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{attname && attname.map((items,index)=>{
return (
<>
<tr>
<td>{index+1}</td>
<td>{items.studentname}</td>
<td>{items.attdate}</td>
<td>{items.status}</td>
<td>
<button type='button' className="btn btn-primary btn-sm mx-1"  onClick={()=>navigate(`/read-students/${items.id}`)}>Read</button>

<button type='button' onClick={()=>navigate(`/edit-students/${items.id}`)} className="btn btn-warning btn-sm mx-1">Edit</button>

<button type='button' onClick={()=>navigate(`/delete-attendance/${items.id}`)} className="btn btn-danger btn-sm mx-1">Delete</button>
</td>
</tr>
</>
)
})}

</tbody>
</table>

<Chart
chartType="PieChart"
data={data}
options={options}
width={"100%"}
height={"400px"}
/>
</div>
)
}
